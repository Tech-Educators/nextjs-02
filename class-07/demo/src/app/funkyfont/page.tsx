import { Foldit, Poppins } from "next/font/google";

const foldit = Foldit({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function FunkyFontPage() {
  console.log(poppins);
  return (
    <div className={foldit.className}>
      <h2>Funky Fonts</h2>
      <p className={poppins.className}>
        Poppins! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur praesentium quae nesciunt,
        debitis quod blanditiis repudiandae. Voluptas laborum, dolores animi maiores, atque modi ab, accusantium natus vitae
        illo praesentium!
      </p>
    </div>
  );
}
