<?php

namespace App\Models;

use App\Models\Categories;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }

    public function orders()
    {
        return $this->hasMany(Orders::class);
    }
}
