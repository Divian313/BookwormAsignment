<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use \App\Http\Controllers\BookController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/books/{id}', [BookController::class, 'show(id)']); //getOneBook
Route::get('/books/getTop08MostReviews', [BookController::class, 'getTop08MostReviews']);
Route::get('/books/getTop10Discount', [BookController::class, 'getTop10Discount']);
Route::get('/books/getAvgRatingStarAttribute', [BookController::class, 'getAvgRatingStarAttribute']);
Route::get('/books/getRecomended', [BookController::class, 'getRecomended']);
Route::get('/books/getPopular', [BookController::class, 'getPopular']);



Route::redirect('/books/testt', '/api/books/getTop08MostReviews', );


Route::resource('/books', BookController::class);

























