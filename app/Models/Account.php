<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'id',
        'name',
        'login',
        'password',
        'tag_id'
    ];

    public function tags(){
        return $this->hasMany(Tag::class, 'id','tag_id');
    }
}
