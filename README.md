# draw.io-export

This repository is a fork of [draw.io-export](https://github.com/b1f6c1c4/draw.io-export) maintained by [b1f6c1c4](https://github.com/b1f6c1c4), with additional features such as batch conversion with glob pattern matching and the ability for supplying multiple `.drawio` files.

___

Convert [draw.io](https://app.diagrams.net/) XML files (usually `*.drawio`) to `PDF`/`PNG` within the command line.

<!-- Works nicely with `make` and/or `latexmk`. Useful if you are writing a paper or thesis with many figures. -->

## Installing Locally

```bash
git clone --depth=1 https://github.com/michaelgrigoryan25/draw.io-export
npm install --global ./draw.io-export
drawio --help
```

## Example Usage

### Default behavior

When glob pattern matching is disabled, you can directly supply the paths of the files, and they will be exported accordingly:

```bash
drawio file1.drawio file2.drawio
```

### With glob pattern matching

When glob pattern matching is enabled the outputs of the files will have the same name as the original files and will be postfixed with `.exported.{format}`. The files will be exported in the same directory that the drawio files were found from:

```bash
drawio -G "./*.drawio" "../*.drawio"
```

## Flags

### Glob conversion `-G|--glob`

This flag enables specifying glob patterns for matching drawio files. By default, this flag is set to `false`. You have to explicitly specify it to use glob patterns.

### Supported formats `-F|--fmt`

- If not specified, automatically detect `png` or `pdf`
- `png` Only the first page is used
- `pdf` Only the first page is used
<!-- - `cat-pdf` All pages used, concatenated
- `split-png` All pages used, separate files with name `<dest><#>.png`
- `split-pdf` All pages used, separate files with name `<dest><#>.pdf`
- `split-index-png` Alias for `split-png`
- `split-index-pdf` Alias for `split-pdf`
- `split-id-png` All pages used, separate files with name `<dest><diagram-id>.png`
- `split-id-pdf` All pages used, separate files with name `<dest><diagram-id>.pdf`
- `split-name-png` All pages used, separate files with name `<dest><page-name>.png`
- `split-name-pdf` All pages used, separate files with name `<dest><page-name>.pdf` -->
