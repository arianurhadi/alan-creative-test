<?php

namespace App\Models;

use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Menu extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['name', 'price'];

    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('thumb')
            ->fit(Manipulations::FIT_CROP, 300, 300)
            ->nonQueued();
    }

    public function cart()
    {
        return $this->belongsTo(Cart::class, 'menu_id', 'id');
    }

    public function getImageUrlAttribute()
    {
        $image_url = $this->getFirstMediaUrl('image', 'thumb');

        if (!$image_url) {
            return asset('img/placeholder-image.png');
        }

        return $image_url;
    }
}
