<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\User as Model;
use Illuminate\Support\Facades\DB;

class AddRepository
{

    public static function getEntrances($userId)
    {
        return DB::table('entrances')
            ->select(['date'])
            ->where('user_id', $userId)
            ->get();
    }


    public static function setEnter($userId)
    {
        return DB::table('entrances')
            ->insert(
                [
                    'user_id' => $userId,
                    'date' => date("Y-m-d")
                ]);

    }


    public static function getRestores($userId)
    {
        return DB::table('restores')
            ->select(['date'])
            ->where('user_id', $userId)
            ->get();
    }


    public static function setRestores($userId)
    {
        return DB::table('restores')
            ->insert(
                [
                    'user_id' => $userId,
                    'date' => date("Y-m-d")
                ]);

    }


}
