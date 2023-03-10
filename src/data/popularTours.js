import pdg1 from "../assets/images/pdg/img1.jpg"
import pdg2 from "../assets/images/pdg/img2.jpg"
import bdg1 from "../assets/images/bdg/img1.jpg"
import bdg2 from "../assets/images/bdg/img2.jpg"
import mlg1 from "../assets/images/mlg/bromo/img1.jpg"

import bt1 from "../assets/images/bt/img1.jpg"
import bt2 from "../assets/images/bt/img2.jpg"
import bt3 from "../assets/images/bt/img3.jpg"

const popularTours = [
    {
        id: 1,
        city: "padang",
        desc: "Kota Padang merupakan ibukota dari provinsi Sumatera Barat. Kota Padang yang terkenal dengan Masakan dan Rumah Gadangnya ini menjadi salah satu kota paling indah di Indonesia. Satu hal yang tidak banyak kita sadari adalah di Padang ini mempunyai sebuah pulau kecil yang dikabarkan keindahannya melebih Bali. Nama pulau itu adalah pulau Sikuai. Pulau ini belum dikenal oleh masyarakat karena pulau ini masih bersih dan juga masih perawan. Maksudnya adalah bahwa pulau ini masih sangat jarang diambah oleh manusia dan belum banyak dikunjungi oleh orang- orang.",
        images: [pdg1, pdg2],
        tours: ["pulau sikuai"]

    },
    {
        id: 2,
        city: "bandung",
        desc: "Kawasan perbukitan dan perkebunan teh yang menjamur di kota ini seakan menjadi surga tersendiri bagi para pewisata. Bandung yang mempunyai letak geografis lebih tinggi daripada kota- kota di sekitarnya memiliki pemandangan hijau yang lebih banyak. Terlebih udara sejuk yang menyelimuti kota ini semakin membuat siapapun yang berkunjung ke bandung menjadi betah dan ingin berlama- lama di kota ini.",
        images: [bdg1, bdg2],
        tours: ["kebun teh rancabali"]

    },
    {
        id: 3,
        city: "malang",
        desc: "Kota Malang, adalah salah satu kota yang berada di provinsi Jawa Timur. biasanya jika ada karyawisata ke Jawa Timur, maka tidak akan pernah ketinggalan untuk berkunjung di kota satu ini. Malang yang juga dikenal sebagai Kota Batu merupakan kota yang berada di wilayah perbukitan, sehingga kota ini memiliki udara yang sejuk seperti Bandung. Jika kita ingin bertanya apa saja tempat wisata di Malang maka kita akan merasa takjub karena saking banyaknya. Banyak sekali tempat wisata di Malang, mulain dari perkebunan hingga taman hiburan. Malang memang mempunyai tanaman yang khas, yakni buah apel. Saking banyaknya hingga ada sebuatan Apel Malang. Apel Malang ini adalah buah apel yang berwarna hijau dan ukurannya tidak terlalu besar. Ada banyak sekali pohon apel yang tumbuh di Malang sehingga perkebunan apel pun dijadikan tempat wisata. Selain perkebunan apel, ada pula perkebunan teh dan bahkan taman bunga.",
        images: [mlg1],
        tours: ["gunung bromo"]

    },
    {
        id: 4,
        city: "bukit tinggi",
        desc: "Bukit Tinggi, sebuah kota yang berada di pulau Sumatera, khususnya di provinsi Sumatera Barat. Bukit Tinggi menjadi kota yang paling indah di Indonesia. Siapa sangka kota yang namanya belum terlalu melambung tinggi ini menjadi kota yang paling indah. Kota kecil ini mempunyai penduduk yang banyak, sehingga tingkat kepadatannya tinggi. Meskipun kepadatannya tinggi, namun kota ini mempunyai struktur tata kota yang sangat baik dan apik, serta kompleksitasnya tidak akan kita temukan di kota- kota lain. Yang menjadikan kota ini indah adalah kota ini mempunyai pemandangan yang menakjubkan dengan latar belakang gunung  dan juga ngarai. Ngarai yang sangat terkenal ini adalah Ngarai Sianok. Bahkan ngarai sianok ini digadang- gadang sebagai ngarai yang terindah nomor 2 di dunia setelah Grand Canyon. Selain itu kota ini juga mempunyai budaya yang masih alami dan terjaga. Udara dingin yang menyelimuti kota Bukit Tinggi akan menambah kebetahan pengunjung untuk berlama- lama tinggal di kota ini.",
        images: [bt1, bt2, bt3],
        tours: ["ngarai sianok"]

    }
]

export default popularTours;