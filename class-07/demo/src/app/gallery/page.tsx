import Image from "next/image";
import Platypus from "@/../public/platypus.webp";

export default function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      {/* usiung an image we import from our opublic folder gives us access to some cool features! */}
      <Image src={Platypus} alt="Platypus" placeholder="blur" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cum delectus fugiat laudantium iusto praesentium
        explicabo totam eius impedit, ipsam dolorem eaque hic accusamus placeat!
      </p>
      <Image src="/blobfish.webp" alt="blobfish" width={400} height={225} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cum delectus fugiat laudantium iusto praesentium
        explicabo totam eius impedit, ipsam dolorem eaque hic accusamus placeat!
      </p>
    </div>
  );
}
