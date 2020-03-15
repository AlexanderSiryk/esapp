<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\Model;


abstract class BaseRepository
{
    /**
     * @var Model
     */
    protected $model;

    public function _construct()
    {
        $this->model = app($this->getModelClass());
    }

    protected function startCondition()
    {
        return clone $this->model;
    }
}
