<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\UserController;
use App\Models\Article;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('update-device-token', [UserController::class, 'addDeviceToken']);
// Route::post('send-notifications', [UserController::class, 'sendNotification']);
Route::get('store', [ArticleController::class, 'store']);
Route::get('broadcast', [ArticleController::class, 'broadcast']);
