<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Schema;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('menus')->delete();
        DB::table('menus')->truncate();

        $items = [
            [
                'name' => 'Ayam Bakar',
                'price' => 20000,
                'image' => 'https://cdn0-production-images-kly.akamaized.net/M63Fm-0RE7Kup8ELu__IRAFJr-U=/0x0:3000x1691/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3910470/original/073110400_1642740733-shutterstock_1854744190.jpg'
            ],
            [
                'name' => 'Sate Kambing',
                'price' => 15000,
                'image' => 'https://cdn1-production-images-kly.akamaized.net/bLDquq0oaVBpG2NE_Lq0QTthaDo=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4485302/original/008851000_1687970322-aa.jpg'
            ],
            [
                'name' => 'Nasi Goreng',
                'price' => 13000,
                'image' => 'https://cdn1-production-images-kly.akamaized.net/EjwV7j3Y4JrlqUFuavke4NtRWtM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg'
            ],
            [
                'name' => 'Sop Ayam',
                'price' => 16000,
                'image' => 'https://cdn1.katadata.co.id/media/images/thumb/2023/05/29/Ilustrasi_Sop_Ayam-2023_05_29-16_45_35_2a2511678f8d64f0968a1a6c80a6f8fc_960x640_thumb.jpg'
            ],
            [
                'name' => 'Bakmi Jawa',
                'price' => 17000,
                'image' => 'https://asset.kompas.com/crops/5Xpn6kaR1ASAIH8GpfuxJONBoIo=/28x12:996x657/750x500/data/photo/2022/07/12/62ccdc61ccd88.jpg'
            ]
        ];

        foreach ($items as $item) {
            DB::transaction(function () use($item) {
                $attr = [
                    'name' => $item['name'],
                    'price' => $item['price'],
                ];

                $menu = Menu::create($attr);
                $menu->addMediaFromUrl($item['image'])->toMediaCollection('image');
            });
        }

        Schema::enableForeignKeyConstraints();
    }
}
