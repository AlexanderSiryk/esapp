<?php

namespace App\Repositories;

use App\Models\Tag as Model;

class TagRepository extends BaseRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }


   public function getIdTag($tag,$userId){
        $result = $this->startCondition()
                    ->select('id')
                    ->where([['user_id', $userId],
                             ['name', $tag]])
                    ->limit(1)
                    ->first();
        //если тэга нет - создадим
        if(!$result){
            $result = $this->createTag($tag, $userId);
        }

       return $result->id;
    }

    private function createTag($name,$userId){
        $tag = new Model();
        $tag->user_id = $userId;
        $tag->name = $name;
        $tag->save();

        return $tag;
    }

}

