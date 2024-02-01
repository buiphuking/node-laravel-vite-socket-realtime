<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('users')->insert([
            // 'name' => Str::random(10),
            // 'email' => Str::random(10).'@gmail.com',
            // 'password' => Hash::make('password'),
            'name' => 'kingbui',
            'email' => 'buiphuking@gmail.com',
            'password' => bcrypt('123456'),
            'device_key' => 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIifQ.H1-6lhNCSg_FGIe_hNRdLjp1AeAtwEj0ZGE90QE5L7s',
        ]);
    }
}
