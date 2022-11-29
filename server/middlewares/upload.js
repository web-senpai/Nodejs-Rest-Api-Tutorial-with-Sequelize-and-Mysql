import multer from 'multer';

const excelFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml") ||
    file.mimetype.includes("csv") 
  ) {
    cb(null, true);
  } else {
    cb(new Error("Please upload only excel file."), false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./server/upload/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, `${Date.now()}-datawrapper-${file.originalname}`);
  },
});

let uploadFile = function (req, res, next)
{
    multer({ storage: storage , fileFilter: excelFilter }).single('file') (req, res, function (err) {
        
        if (err instanceof multer.MulterError) {
            return res.status(400).json(err.message);
        } else if (err) {
            return res.status(400).json(err.message);
        }
        else
            next();
    });
}


export {uploadFile};
