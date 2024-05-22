"use client";

import { useRouter } from "next/navigation";
import Script from "next/script";

const SeeMoreButton = ({ page }: any) => {
  const router = useRouter();

  const seeMore = () => {
    if (!page) {
      router.push(`?page=2`);
    } else {
      router.push(`?page=${Number(page) + 1}`);
    }
  };

  const seePrev = () => {
    if (page > 1) {
      router.push(`?page=${Number(page) - 1}`);
    }
  };

  const play = () => {};

  return (
    <>
      {Number(page) > 1 && (
        <button className="bg-[purple] p-2 rounded" onClick={() => seePrev()}>
          Previous
        </button>
      )}
      <button className="bg-[purple] p-2 rounded" onClick={() => seeMore()}>
        Next
      </button>

      <Script type="module" async>
        {`
        import WebTorrent from 'https://esm.sh/webtorrent';
        
        const client = new WebTorrent();
        const magnetURI = 'magnet:?xt=urn:btih:20F8D7C2942B143E6E2A0FB5562CDE7EE1B17822&dn=Eternals.2021.1080p.WEBRip.1600MB.DD5.1.x264-GalaxyRG&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://explodie.org:6969/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://ipv4.tracker.harry.lu:80/announce&tr=udp://p4p.arenabg.com:1337/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://opentor.org:2710/announce&tr=udp://tracker.dler.org:6969/announce&tr=udp://9.rarbg.me:2970/announce&tr=https://tracker.foreverpirates.co:443/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=http://tracker.openbittorrent.com:80/announce&tr=udp://opentracker.i2p.rocks:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://coppersurfer.tk:6969/announce&tr=udp://tracker.zer0day.to:1337/announce';

        console.log(client);
        
        client.add(magnetURI, torrent => {
          // Got torrent metadata!
          console.log(torrent);
          console.log('Client is downloading:', torrent.infoHash)
        
          for (const file of torrent.files) {
            document.body.append(file.name)
          }
        })
        `}
      </Script>
    </>
  );
};

export default SeeMoreButton;
