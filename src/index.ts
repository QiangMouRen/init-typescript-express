import express, { Application } from "express";
import morgan from 'morgan';
import path from 'path'
import helmet from 'helmet';
import bodyParser from 'body-parser';
export const root = __dirname;
import rootRouter from "@routes/root";

const app: Application = express();
app.use(morgan('dev'));

// express安全套件
app.use(helmet({
    ieNoOpen: true,
    xssFilter: true,
    hidePoweredBy: { setTo: 'javaweb 5.0' }// 伪装PoweredBy头
}));

//  json 默认格式化
app.set('json spaces', 4)
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// 静态资源
app.use("/public", express.static(path.join(root, 'public')));

// view engine setup
app.set('views', path.join(root, '../', 'views'));
app.set('view engine', 'ejs');

app.use(rootRouter);

// 启动
const port: number = Number(process.env.PORT || 8880);
app.listen(port, () => console.info(`服务运行于端口：${port}`));
