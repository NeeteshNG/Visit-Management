import {
  CiMailIcon,\n  FaFacebookIcon,\n  FaWhatsappIcon,\n  FaXTwitterIcon,
} from "@/modules/icons/SvgIcons";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import {
    EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
  } from "react-share";
        
export default function ShareDialog({handleClose,open,url}) {
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: {  padding: '20px', height:"136px", width:"440px"} }}>
  
  <DialogContent>
 <div className='flex justify-between'>
 <FacebookShareButton url={url}>
    <div classname="text-7xl bg-red-500">
    <FaFacebookIcon className="text-5xl text-black"/>
    </div>
       
</FacebookShareButton>
   <WhatsappShareButton url={url}>
   <div classname="text-7xl ">
    <FaWhatsappIcon className="text-5xl text-black"/>
    </div>
   </WhatsappShareButton>
   <EmailShareButton url={url}>
   <div classname="text-7xl ">
    <CiMailIcon className="text-5xl text-black"/>
    </div>
   </EmailShareButton>
   <TwitterShareButton url={url}>
   <div classname="text-7xl ">
    <FaXTwitterIcon className="text-5xl text-black"/>
    </div>
   </TwitterShareButton>
 </div>
  </DialogContent>
 
</Dialog>
  )
}
