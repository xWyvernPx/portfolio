
import mongoose from "mongoose";
const visitorSchema = new mongoose.Schema({
    deviceId: String,
    ip: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  });
  
  const Visitor = mongoose.model('Visitor', visitorSchema);
const ONE_HOUR = 60 * 60 * 1000;
export function countVisitor(req, res, next) {
    const deviceId = req.get('user-agent');
    const ip = req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress || req.ip ||
    null;;
  
    Visitor.findOne({ deviceId, ip })
      .sort({ timestamp: -1 })
      .exec((err, lastVisit) => {
        if (err) {
          console.error(err);
          return next(err);
        }
  
        const now = Date.now();
        if (lastVisit == null || (now - lastVisit.timestamp.getTime()) > ONE_HOUR) {
          const visitor = new Visitor({ deviceId, ip });
          visitor.save((err) => {
            if (err) {
              console.error(err);
              return next(err);
            }
            next();
          });
        } else {
          next();
        }
      })
    }

