<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/login', 'App\Http\Controllers\LoginController@index');
Route::get('/login/index', 'App\Http\Controllers\LoginController@index');
Route::get('/login/list', 'App\Http\Controllers\LoginController@index');
Route::get('/login/form', 'App\Http\Controllers\LoginController@index');
Route::get('/login/edit/{num}', 'App\Http\Controllers\LoginController@index');