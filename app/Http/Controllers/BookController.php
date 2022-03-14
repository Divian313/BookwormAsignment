<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreBookRequest;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    protected $appends = ['avg_rating_star'];
    public function index()
    {
        $books = DB::table('book')->paginate(5);
        return $books;

//       $book = Book::all();
//        return $book;
    }

//CÓ THỂ LÀ CẦN USE MỘT CÁI GÌ ĐÓ
    public function getAvgRatingStarAttribute() {
        $reviews = $this->reviews;
        $avgRatingStar;
        $count1Star = 0;
        $count2Star = 0;
        $count3Star = 0;
        $count4Star = 0;
        $count5Star = 0;

        foreach($reviews as $review) {
            if ($review->rating_star == 1)
                $count1Star++;
            elseif ($review->rating_star == 2)
                $count2Star++;
            elseif ($review->rating_star == 3)
                $count3Star++;
            elseif ($review->rating_star == 4)
                $count4Star++;
            elseif ($review->rating_star == 5)
                $count5Star++;
        }

        $avgRatingStar = (1*$count1Star + 2*$count2Star + 3*$count3Star + 4*$count4Star + 5*$count5Star) / ($count1Star + $count2Star + $count3Star + $count4Star + $count5Star);

        return $avgRatingStar;
    }

    public function testt(){
        print_r(5);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('book.create', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(StoreBookRequest $request)
    {
//        $book = new Book();
//        $book->category_id = 1;
//        $book->author_id = 1;
//        $book->book_title = $request->get('book_title');
//        $book->book_summary = $request->get('book_summary');
//        $book->book_price = $request->get('book_price');
//        $book->save();
//        return $book;
    }

    /**
     * Display the specified resource.
     *
     */
    public function show($id)
    {
//        $books = DB::table('book')->find($id);
//        return $books;
        $books = Book::find($id);
        return $books;
    }
    public function getTop10Discount()
    {
        return Book::select('book.id', 'book_title', 'book_summary', 'book_price', 'book_cover_photo', 'author_name', "discount_price", 
        DB::raw("book_price - discount_price AS  most_discount")
        )
        ->join("discount", "discount.book_id", '=', 'book.id')
        ->leftJoin("author", "author.id", '=', 'book.author_id')
        ->leftJoin("review", "review.book_id", '=', 'book.id')
        ->leftJoin("category", "category.id", '=', 'book.category_id')
        ->groupBy("book.id", "book_title", 'book_summary', 'book_price', "discount_price", 'book_cover_photo', "author_name")
        ->orderBy("most_discount", 'desc')
        ->orderBy("discount_price", 'asc')->get()->take(10);

    }
    public function getRecomended(){
        return Book::select(
            'book.id',
            'book_title',
            'book_summary',
            'book_price',
            'book_cover_photo',
            'author_name',
            'discount_price',
            DB::raw('AVG(review.rating_start) as avg_rating')
        )
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->groupBy("book.id", "book_title", 'book_summary', 'book_price', "discount_price", 'book_cover_photo', 'author_name')
            ->orderBy("avg_rating", 'DESC')
            ->orderBy("discount_price", 'ASC')
            ->orderBy("book_price", 'ASC')
            ->get()
            ->take(8);
    }

    public function getPopular(){
        return Book::select(
            'book.id',
            'book_title',
            'book_summary',
            'book_price',
            'book_cover_photo',
            'author_name',
            'discount_price',
            DB::raw('COUNT(review.id) as total_review')
        )
            ->leftJoin("discount", "discount.book_id", '=', 'book.id')
            ->join("review", "review.book_id", '=', 'book.id')
            ->leftJoin("author", "author.id", '=', 'book.author_id')
            ->leftJoin("category", "category.id", '=', 'book.category_id')
            ->groupBy("book.id", "book_title", 'book_summary', 'book_price', "discount_price", 'book_cover_photo', 'author_name')
            ->orderBy("total_review", 'DESC')
            ->orderBy("discount_price", 'ASC')
            ->orderBy("book_price", 'ASC')
            ->get()
            ->take(8);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getTop08MostReviews()
    {
        return Book::join('review', 'book.id', '=', 'review.book_id') //join thằng review với book lại với nhau
            ->join('author', 'book.author_id', '=', 'author.id')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->selectRaw('distinct book.id, book_title, author_name, book_price, discount_price')
            ->withCount('review')
            ->selectRaw('CASE
                        WHEN discount_price IS NOT NULL THEN (select discount_price as final_price)
                        ELSE (select book_price as final_price)
                    END')
            ->orderBy('review_count', 'desc')
            ->orderBy('final_price', 'asc')
            ->limit(8)
            ->get();
    }


    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
