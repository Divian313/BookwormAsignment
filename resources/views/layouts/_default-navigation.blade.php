<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{route('admin.books.index')}}">Books</a>
                </li>
{{--                <li class="nav-item">--}}
{{--                    <a class="nav-link active" aria-current="page" href="/login">Login</a>--}}
{{--                </li>--}}
{{--                <div>--}}
{{--                    email: <input type="text">--}}
{{--                    password: <input type="password">--}}
{{--                    <input type="submit" value="Submit">--}}
{{--                </div>--}}
                <form action="{{ route('submit-login') }}" method="post" >
                    @csrf
                    email: <input type="text">
                    password: <input type="password">
                    <input type="submit" value="Submit">
                </form>

{{--                <li>--}}
{{--                    <div style="right: 0px">--}}
{{--                        username: <input type="text">--}}
{{--                        password: <input type="password">--}}
{{--                        <input type="submit" value="Submit">--}}
{{--                    </div>--}}
{{--                </li>--}}

            </ul>

        </div>
    </div>
</nav>
