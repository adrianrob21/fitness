import { PhotosCarousel } from 'Components';

const photos = [
  'https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g',
  'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs',
  'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
  'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs',
  'https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g',
  'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs',
  'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
  'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs',
  'https://fastly.picsum.photos/id/811/200/300.jpg?hmac=h_NbFElSb3w71ZJbJxKMQg8QNgch87Gbus_L_rsfi6g',
  'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs',
  'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
  'https://fastly.picsum.photos/id/600/200/200.jpg?hmac=x3_SXBDfy4wqgriXAHmONXmt4rEB-k8sVoY7P5q8Bgs'
];

const Photos = () => (
  <div className={'w-full flex justify-center pt-20'}>
    <PhotosCarousel {...{ photos }} />
  </div>
);

export default Photos;
