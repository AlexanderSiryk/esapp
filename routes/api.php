<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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



//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
//Route::get('/', function () {
//    return view('app');
//});


Route::get('init','App\AppController@init');


//Route::resource('accounts', 'App\AccountController');

Route::get('accounts', 'App\AccountController@index');
Route::post('accounts', 'App\AccountController@store');
Route::delete('accounts/{account}', 'App\AccountController@destroy');
Route::put('accounts/{account}', 'App\AccountController@update');


Route::get('accounts/del', 'App\DelAccountController@index');
Route::post('accounts/del/{account}', 'App\DelAccountController@restore');
Route::post('accounts/del', 'App\DelAccountController@restore');
Route::delete('accounts/del/{account}', 'App\DelAccountController@destroy');


Route::post('log', 'App\LogController@auth');
Route::post('log/salt', 'App\LogController@salt');
