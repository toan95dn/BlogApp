export default function catchAsync(func) {
  return func(req, res, next).catch(next);
}
