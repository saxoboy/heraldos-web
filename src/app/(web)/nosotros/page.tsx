import Video from "next-video";
import videoLoop from "/videos/video-home.mp4?thumbnailTime=0";
const NosotrosPage = () => {
  return (
    <>
      <section className="bg-black">
        <div className="relative container p-0">
          <Video
            src={videoLoop}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full object-cover relative mask-image"
          />
          <div className="shadowVideo" />
          <div className="txtVideoHero">
            <h3 className="text-2xl">Asociacion de Caballeros</h3>
            <h1 className="text-5xl">Heraldos de Cristo</h1>
            <p className="text-2xl">
              Hombres de valor construyendo un legado perdurable!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto h-96">
          <h1 className="text-5xl text-center">Nosotros</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, voluptate, quos, quae doloremque quod quia dolorum
            perferendis eaque repellendus atque. Quisquam voluptatem, voluptate,
            quos, quae doloremque quod quia dolorum perferendis eaque
            repellendus atque.
          </p>
        </div>
      </section>
    </>
  );
};

export default NosotrosPage;
