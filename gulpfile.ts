import gulp from 'gulp'
import eslint from 'gulp-eslint'
import ts from 'gulp-typescript'
import uglify from 'gulp-uglify'
import replace from 'gulp-replace'
import webpack from 'gulp-webpack'
import wp from 'webpack'
import webpackConfig from './webpack.config'
const tsProject = ts.createProject(`tsconfig.json`)
const srcDir = `src`
const destDir = `dist`

gulp.task('default', () => {
  return gulp
    .src(`${srcDir}/*.ts`)
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(tsProject())
    .pipe(
      uglify({
        mangle: true,
        compress: true,
      })
    )
    .pipe(replace(/^(.*)$/, `javascript:$1`))
    .pipe(gulp.dest(destDir))
})

gulp.task('webpack', () => {
  return gulp
    .src(`./src/index.ts`)
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(webpack(webpackConfig, wp))
    .pipe(
      uglify({
        mangle: true,
        compress: true,
      })
    )
    .pipe(replace(/^(.*)$/, `javascript:$1`))
    .pipe(gulp.dest('./dist'))
})