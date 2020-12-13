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

        if (!$entrs) return [];
        return self::toJSON($entrs);
    }


    public static function setEnter($userId, $location)
    {
        return DB::table('entrances')
            ->insert(
                [
                    'user_id' => $userId,
                    'date' => date("Y-m-d"),
                    'location' => json_encode($location)
                ]);

    }


    public static function getLastEnter($userId)
    {
        $res = DB::table('entrances','id')
            ->select(['location','id'])
            ->where('user_id', $userId)
            ->orderBy('id', 'DESC')
            ->limit(1)
            ->get();

        return self::toJSON($res,1)[0];
    }


    public static function getRandomEnter($id, $location, $count = 4)
    {
        $res = DB::table('entrances','id')
            ->select(['id','location'])
            ->where('location', '!=', $location)//['user_id', $id]
            ->inRandomOrder()
            ->limit($count)
            ->get();

        return self::toJSON($res,1);
    }


    private static function toJSON($array, $ext = 0)
    {
        $arr = [];
        foreach ($array as $item) {
            if($ext){
                $obj = (object)json_decode($item->location);
                $obj->id = $item->id;

                $arr[] = $obj;
            }
            else{
                $arr[] = json_decode($item->location);
            }

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



    public static function getLogRequest($userId)
    {
        $entrs = DB::table('log_request')
            ->select(['id','current_location','access'])
            ->where('user_id', $userId)
            ->orderBy('id','DESC')
            ->limit(1)
            ->first();

        if(!$entrs) return (object)['access'=>1];

        return $entrs;
    }

    public static function changeLogRequest($id, $success)
    {
        DB::table('log_request')
            ->where('id', $id)
            ->update(['access' => $success]);

        return $success;
    }

    public static function setLogRequest($userId,$loc)
    {
        return DB::table('log_request')
            ->insert(
                [
                    'user_id' => $userId,
                    'date' => date("Y-m-d"),
                    'access' => 0,
                    'current_location' => json_encode($loc)
                ]);

    }




}
