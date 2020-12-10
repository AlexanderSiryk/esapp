<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\User as Model;
use Illuminate\Support\Facades\DB;

class AddRepository
{


    public static function getEntrances($userId)
    {
        $entrs = DB::table('entrances')
            ->select(['location'])
            ->where('user_id', $userId)
            ->get();

        if(!$entrs) return [];
        return $entrs;
    }



    public static function setEnter($userId,$location)
    {
        return DB::table('entrances')
            ->insert(
                [
                    'user_id' => $userId,
                    'date' => date("Y-m-d"),
                    'location' => json_encode($location)
                ]);

    }


    private static function toJSON($array){
        $arr = [];
        foreach ($array as $a => $b){
            $arr[$a] = json_decode($b);
        }
        return $arr;
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
