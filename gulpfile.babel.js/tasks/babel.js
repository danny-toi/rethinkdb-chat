import gulp from 'gulp';
import babel from 'gulp-babel';

import config from '../config';

gulp.task('babel:server', () => {
  return gulp.src(config.server.src)
  .pipe(babel({
    sourceMaps: 'inline'
  }))
  .pipe(gulp.dest(config.server.dist));
});

gulp.task('babel:public', () => {
  return gulp.src(config.public.src)
  .pipe(babel({
    sourceMaps: 'inline'
  }))
  .pipe(gulp.dest(config.public.dist));
});
