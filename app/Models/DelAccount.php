<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DelAccount extends Model
{
    protected $table = 'del_accounts';

    public $timestamps = false;




    public function tag(){
        return $this->hasOne(Tag::class, 'id','tag_id');
    }
}
