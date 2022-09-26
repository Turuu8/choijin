import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const AboutAs = () => {
  const style = {
    about: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    background: "linear-gradient(black ,  black )",
      color: 'primary.light',
      // margin: '1% 0 ',
    },
    text: {
      width: "80%",
      textAlign: "center",
      backgroundColor: "primary.second",
      // boxShadow: '0 0 25px 0 #841c23',
    },
  };
  return (
    <Box component="div" height="30vh" width="100%" marginTop={-5} sx={style.about}>
      <Box component="h2" p={2} sx={style.text}>
        {/* <Typography fontSize={25} sx={{ color: 'primary.light' }} >
          Чойжин Тэмпл ресторан нь газар дундын тэнгис орчимын хоол, дарсаар дагнан үйлчилгээ явуулдаг билээ. 2013 онд газар дундын тэнгис орчимын хоолыг Юнескогийн соёлын биет бус өвийн жагсаалтанд бүртгэсэн бөгөөд манай ресторан боловсроогүй үр тариа, чидун жимсний тос, усан үзмийн дарс, өөрийн эх орны зэрлэг жимс, эко хүнсний бүтээгдэхүүнээр баяжуулан амтлаг эрүүл хоолыг үйлчлүүлэгч танд санал болгож байна. Эрхэм үйлчлүүлэгч та тав тухтай орчинд харах, сонсох, амтлах мэдэрхүйгээ баясгахыг хүсвэл манай рестораныг сонгоорой.
        </Typography> */}
      </Box>
    </Box>
  );
};
