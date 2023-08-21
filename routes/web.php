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
//Auth::routes();
Route::get('/candidate_login', [App\Http\Controllers\CandidateAuthController::class, 'index'])->name('candidate.login');
Route::get('/recruiter_login', [App\Http\Controllers\RecruiterAuthController::class, 'index'])->name('recruiter.login');
Route::get('/admin_login', [App\Http\Controllers\UserAuthController::class, 'index'])->name('admin.login');

Route::get('/candidate_register', [App\Http\Controllers\CandidateAuthController::class, 'register_form'])->name('candidate.register');
Route::get('/recruiter_register', [App\Http\Controllers\RecruiterAuthController::class, 'register_form'])->name('recruiter.register');
Route::get('/admin_register', [App\Http\Controllers\UserAuthController::class, 'register_form'])->name('admin.register');



Route::group(['prefix' => '/auth', 'as' => 'auth.'], function () {

    Route::post('/admin_login', [App\Http\Controllers\UserAuthController::class, 'login'])->name('admin.login');
    Route::post('/candidate_login', [App\Http\Controllers\CandidateAuthController::class, 'login'])->name('candidate.login');
    Route::post('/recruiter_login', [App\Http\Controllers\RecruiterAuthController::class, 'login'])->name('recruiter.login');

    Route::post('/admin_register', [App\Http\Controllers\UserAuthController::class, 'register'])->name('admin.register');
    Route::post('/candidate_register', [App\Http\Controllers\CandidateAuthController::class, 'register'])->name('candidate.register');
    Route::post('/recruiter_register', [App\Http\Controllers\RecruiterAuthController::class, 'register'])->name('recruiter.register');

    
});
// This is a protected group route for auth:guard('web') custom middleware
Route::middleware('redirectifnotadmin:web')->group( function () {
    
    Route::get('/admin', [App\Http\Controllers\AdminController::class, 'index'])->name('admin.profile');
});

// This is a protected group route for auth:guard('recruiter') custom middleware
Route::middleware('redirectifnotrecruiter:recruiter')->group( function () {

    Route::get('/recruiter', [App\Http\Controllers\RecruiterController::class, 'index'])->name('recruiter.profile');
});
// This is a protected group route for auth:guard('candidate') custom middleware
 Route::middleware('redirectifnotcandidate:candidate')->group( function () {
         Route::get('/candidate', [App\Http\Controllers\CandidateController::class, 'index'])->name('candidate.profile');
         Route::get('/show_candidate', [App\Http\Controllers\CandidateController::class, 'show'])->name('candidate.show');
 });

// Route::get('/', function () {
//     return view('welcome');
// });
