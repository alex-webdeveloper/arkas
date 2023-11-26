import Header from '../../components/Header';
import CardsGoods from '../../components/CardsGoods/CardsGoods';
import Footer from '../../components/Footer/Footer';
import './Mramor.scss';
import { mramor } from '../../data';
import GalleryImg from '../../components/GalleryImg';

const images = [
  {
    original: "https://thumb.tildacdn.com/tild3338-3631-4636-b263-303563383264/-/resize/250x/-/format/webp/20160823_080109.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3338-3631-4636-b263-303563383264/-/resize/250x/-/format/webp/20160823_080109.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6462-3965-4637-a332-316164396637/-/resize/558x/-/format/webp/IMG_5366.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6462-3965-4637-a332-316164396637/-/resize/558x/-/format/webp/IMG_5366.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3236-3833-4766-b930-373161343933/-/resize/558x/-/format/webp/4.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3236-3833-4766-b930-373161343933/-/resize/558x/-/format/webp/4.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3736-3830-4161-b264-623865653738/-/resize/318x/-/format/webp/1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3736-3830-4161-b264-623865653738/-/resize/318x/-/format/webp/1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3938-6266-4931-b162-383633393165/-/resize/530x/-/format/webp/IMG_5345.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3938-6266-4931-b162-383633393165/-/resize/530x/-/format/webp/IMG_5345.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6435-3863-4936-a364-326632346563/-/resize/530x/-/format/webp/IMG_5375.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6435-3863-4936-a364-326632346563/-/resize/530x/-/format/webp/IMG_5375.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3964-3266-4036-b062-393434643563/-/format/webp/5.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3964-3266-4036-b062-393434643563/-/format/webp/5.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3837-3064-4236-a238-306438666132/-/resize/431x/-/format/webp/IMG_5307_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3837-3064-4236-a238-306438666132/-/resize/431x/-/format/webp/IMG_5307_1.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6163-6335-4863-b235-666265613538/-/resize/511x/-/format/webp/20160824_121959.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6163-6335-4863-b235-666265613538/-/resize/511x/-/format/webp/20160824_121959.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6334-3131-4134-b064-353861353166/-/resize/264x/-/format/webp/23.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6334-3131-4134-b064-353861353166/-/resize/264x/-/format/webp/23.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6362-3432-4038-b639-613562373533/-/resize/452x/-/format/webp/646512441868cac63865.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6362-3432-4038-b639-613562373533/-/resize/452x/-/format/webp/646512441868cac63865.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3434-3035-4431-b065-313330343934/-/resize/429x/-/format/webp/_1___2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3434-3035-4431-b065-313330343934/-/resize/429x/-/format/webp/_1___2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6164-6634-4464-b935-626332306334/-/resize/409x/-/format/webp/163.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6164-6634-4464-b935-626332306334/-/resize/409x/-/format/webp/163.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6162-3237-4336-b463-636561383764/-/resize/204x/-/format/webp/cb276efd65b9114fc9d2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6162-3237-4336-b463-636561383764/-/resize/204x/-/format/webp/cb276efd65b9114fc9d2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3835-3530-4432-b135-613861373961/-/resize/455x/-/format/webp/20160629_154852.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3835-3530-4432-b135-613861373961/-/resize/455x/-/format/webp/20160629_154852.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3361-3730-4061-b230-303361636632/-/resize/477x/-/format/webp/IMG_2232.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3361-3730-4061-b230-303361636632/-/resize/477x/-/format/webp/IMG_2232.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6136-3835-4330-b363-363762353661/-/resize/425x/-/format/webp/20150129_152024.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6136-3835-4330-b363-363762353661/-/resize/425x/-/format/webp/20150129_152024.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3533-3265-4834-a662-323539646366/-/resize/424x/-/format/webp/0011.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3533-3265-4834-a662-323539646366/-/resize/424x/-/format/webp/0011.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3335-3063-4566-a562-326664363262/-/format/webp/B-104.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3335-3063-4566-a562-326664363262/-/format/webp/B-104.JPG",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6434-3036-4563-b339-636632303538/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6434-3036-4563-b339-636632303538/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3764-3564-4334-a430-316537316461/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3764-3564-4334-a430-316537316461/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6630-3062-4365-a365-356264396537/-/format/webp/__.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6630-3062-4365-a365-356264396537/-/format/webp/__.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3866-3733-4532-a332-306334346363/-/format/webp/Untitled-8.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3866-3733-4532-a332-306334346363/-/format/webp/Untitled-8.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3433-6466-4633-b038-613163323535/-/format/webp/_MG_6968.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3433-6466-4633-b038-613163323535/-/format/webp/_MG_6968.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6530-3231-4965-a338-633364366235/-/resize/420x/-/format/webp/___2.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6530-3231-4965-a338-633364366235/-/resize/420x/-/format/webp/___2.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6434-6335-4466-b432-633365343666/-/format/webp/_29.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6434-6335-4466-b432-633365343666/-/format/webp/_29.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3938-6665-4963-b337-346437393766/-/resize/409x/-/format/webp/DarkGrey_4.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3938-6665-4963-b337-346437393766/-/resize/409x/-/format/webp/DarkGrey_4.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original:  "https://thumb.tildacdn.com/tild3063-6538-4961-b764-616435643962/-/resize/458x/-/format/webp/_.jpg",
    thumbnail:  "https://thumb.tildacdn.com/tild3063-6538-4961-b764-616435643962/-/resize/458x/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3864-6665-4433-b237-306330336163/-/resize/469x/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3864-6665-4433-b237-306330336163/-/resize/469x/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3038-3035-4433-a664-633663323437/-/resize/469x/-/format/webp/M-652.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3038-3035-4433-a664-633663323437/-/resize/469x/-/format/webp/M-652.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3231-6437-4635-a464-386239623262/-/resize/464x/-/format/webp/Legioner.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3231-6437-4635-a464-386239623262/-/resize/464x/-/format/webp/Legioner.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6133-6431-4436-a264-356266633165/-/resize/442x/-/format/webp/IMG_5719.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6133-6431-4436-a264-356266633165/-/resize/442x/-/format/webp/IMG_5719.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6634-3562-4438-b239-383530323030/-/resize/442x/-/format/webp/DSC_3944.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6634-3562-4438-b239-383530323030/-/resize/442x/-/format/webp/DSC_3944.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3034-3862-4630-b761-666638303263/-/resize/442x/-/format/webp/DSC_4021.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3034-3862-4630-b761-666638303263/-/resize/442x/-/format/webp/DSC_4021.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6261-3437-4963-a466-316566313961/-/resize/442x/-/format/webp/DSC_3986.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6261-3437-4963-a466-316566313961/-/resize/442x/-/format/webp/DSC_3986.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6163-3764-4832-a363-326364376262/-/resize/443x/-/format/webp/DSC_7827.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6163-3764-4832-a363-326364376262/-/resize/443x/-/format/webp/DSC_7827.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6332-3934-4965-a166-376265656136/-/resize/441x/-/format/webp/IMG_1517.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6332-3934-4965-a166-376265656136/-/resize/441x/-/format/webp/IMG_1517.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6331-3136-4062-b030-666661356464/-/resize/443x/-/format/webp/DSC_7788.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6331-3136-4062-b030-666661356464/-/resize/443x/-/format/webp/DSC_7788.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6534-6637-4430-a130-336239376634/-/resize/442x/-/format/webp/DSC_44641_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6534-6637-4430-a130-336239376634/-/resize/442x/-/format/webp/DSC_44641_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3862-6366-4632-b261-623530333263/-/resize/442x/-/format/webp/DSC_44381_1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3862-6366-4632-b261-623530333263/-/resize/442x/-/format/webp/DSC_44381_1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3766-3263-4731-a133-323462303863/-/resize/442x/-/format/webp/DSC_44361.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3766-3263-4731-a133-323462303863/-/resize/442x/-/format/webp/DSC_44361.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6335-3666-4465-b037-336337353539/-/resize/427x/-/format/webp/IMG_1515.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6335-3666-4465-b037-336337353539/-/resize/427x/-/format/webp/IMG_1515.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original:  "https://thumb.tildacdn.com/tild3230-6436-4038-b663-643835663839/-/resize/427x/-/format/webp/IMG_1508.jpg",
    thumbnail:  "https://thumb.tildacdn.com/tild3230-6436-4038-b663-643835663839/-/resize/427x/-/format/webp/IMG_1508.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3537-3530-4137-b535-346466666466/-/resize/471x/-/format/webp/CremaGrey_2.png",
    thumbnail: "https://thumb.tildacdn.com/tild3537-3530-4137-b535-346466666466/-/resize/471x/-/format/webp/CremaGrey_2.png",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3734-3562-4636-a239-613164636333/-/resize/600x/-/format/webp/IMG_7573.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3734-3562-4636-a239-613164636333/-/resize/600x/-/format/webp/IMG_7573.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3965-6636-4238-b137-623563306161/-/resize/418x/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3965-6636-4238-b137-623563306161/-/resize/418x/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3339-3035-4133-b339-366561363335/-/resize/284x/-/format/webp/C76A0350_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3339-3035-4133-b339-366561363335/-/resize/284x/-/format/webp/C76A0350_1.JPG",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3934-3161-4865-b334-326634313438/-/resize/533x/-/format/webp/IMG_5339.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3934-3161-4865-b334-326634313438/-/resize/533x/-/format/webp/IMG_5339.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3839-3430-4965-b861-316638323539/-/resize/556x/-/format/webp/C76A0355-1_1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3839-3430-4965-b861-316638323539/-/resize/556x/-/format/webp/C76A0355-1_1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6137-3566-4634-b431-333664393835/-/resize/443x/-/format/webp/DSC_3971.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6137-3566-4634-b431-333664393835/-/resize/443x/-/format/webp/DSC_3971.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3131-3662-4335-b539-333337663438/-/resize/441x/-/format/webp/IMG_7205.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3131-3662-4335-b539-333337663438/-/resize/441x/-/format/webp/IMG_7205.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3337-3231-4930-a437-626432326461/-/resize/441x/-/format/webp/IMG_7193.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3337-3231-4930-a437-626432326461/-/resize/441x/-/format/webp/IMG_7193.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6534-6633-4661-a266-316537613333/-/resize/553x/-/format/webp/IMG_7195.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6534-6633-4661-a266-316537613333/-/resize/553x/-/format/webp/IMG_7195.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3833-6462-4738-a237-326431306666/-/resize/265x/-/format/webp/2222.png",
    thumbnail: "https://thumb.tildacdn.com/tild3833-6462-4738-a237-326431306666/-/resize/265x/-/format/webp/2222.png",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3930-3131-4630-a263-336262323937/-/resize/553x/-/format/webp/DSC02462-1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3930-3131-4630-a263-336262323937/-/resize/553x/-/format/webp/DSC02462-1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
    {
    original: "https://thumb.tildacdn.com/tild3438-6339-4165-b135-373637386662/-/resize/298x/-/format/webp/IMG_0040.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3438-6339-4165-b135-373637386662/-/resize/298x/-/format/webp/IMG_0040.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6238-6136-4064-b265-626139613065/-/resize/539x/-/format/webp/2bb721f604ee0e5a61c7.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6238-6136-4064-b265-626139613065/-/resize/539x/-/format/webp/2bb721f604ee0e5a61c7.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3639-3161-4338-a136-313533393666/-/resize/539x/-/format/webp/IMG_0021-2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3639-3161-4338-a136-313533393666/-/resize/539x/-/format/webp/IMG_0021-2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3235-6435-4062-b865-633731343737/-/resize/580x/-/format/webp/IMG_0022-2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3235-6435-4062-b865-633731343737/-/resize/580x/-/format/webp/IMG_0022-2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6536-3765-4134-a463-323730373761/-/resize/408x/-/format/webp/7b4cb99b-52d9-4138-b.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6536-3765-4134-a463-323730373761/-/resize/408x/-/format/webp/7b4cb99b-52d9-4138-b.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3339-6231-4530-a638-393361333861/-/resize/566x/-/format/webp/11.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3339-6231-4530-a638-393361333861/-/resize/566x/-/format/webp/11.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3862-6239-4937-a632-396130383363/-/resize/566x/-/format/webp/43.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3862-6239-4937-a632-396130383363/-/resize/566x/-/format/webp/43.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6562-6437-4963-b639-323739343238/-/format/webp/IMG_0023-2_1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6562-6437-4963-b639-323739343238/-/format/webp/IMG_0023-2_1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6332-3832-4237-a365-643638356232/-/resize/580x/-/format/webp/28009b306c8a57f5d4fd.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6332-3832-4237-a365-643638356232/-/resize/580x/-/format/webp/28009b306c8a57f5d4fd.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6235-3832-4934-a336-393065623933/-/resize/400x/-/format/webp/7b4edd52c97511d5e3a2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6235-3832-4934-a336-393065623933/-/resize/400x/-/format/webp/7b4edd52c97511d5e3a2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original:  "https://thumb.tildacdn.com/tild3865-3935-4537-a637-616165393533/-/resize/480x/-/format/webp/89ff88a1987127f01545.jpg",
    thumbnail:  "https://thumb.tildacdn.com/tild3865-3935-4537-a637-616165393533/-/resize/480x/-/format/webp/89ff88a1987127f01545.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3530-6531-4435-a238-643139376136/-/resize/400x/-/format/webp/fc464be2cfe9ad84be68.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3530-6531-4435-a238-643139376136/-/resize/400x/-/format/webp/fc464be2cfe9ad84be68.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3634-3464-4033-b533-323563636365/-/resize/400x/-/format/webp/IMG_5363.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3634-3464-4033-b533-323563636365/-/resize/400x/-/format/webp/IMG_5363.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3538-6264-4866-b462-326130646439/-/resize/600x/-/format/webp/IMG_2267.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3538-6264-4866-b462-326130646439/-/resize/600x/-/format/webp/IMG_2267.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },

];

const Mramor = () => {
    return (
		<>
			<Header title={'Мрамор'} />
			<main className='main-goods main-goods_mramor'>
				<CardsGoods goods={mramor} modifier={'mramor'} />
				<h2 className="main-goods__title mb-5">Галерея изделий из мрамора</h2>
				<GalleryImg items={images} />
			</main>
			<Footer/>
		</>
	);
}

export default Mramor;