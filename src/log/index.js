import electronLog from 'electron-log';

// 日志路径 C:\Users\用户名\AppData\Roaming\项目名\logs\

const sysLog = electronLog.scope('sys'); // 系统日志

export default sysLog;
