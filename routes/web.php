<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/test-db', function () {
    return \DB::select('SELECT SQLITE_VERSION()');
});
