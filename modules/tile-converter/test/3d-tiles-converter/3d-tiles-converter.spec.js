// TODO testing external dataset can be flaky. We need to find a way to test I3S locally
import test from 'tape-promise/tape';
import {Tiles3DConverter} from '@loaders.gl/tile-converter';
import {isBrowser, setLoaderOptions} from '@loaders.gl/core';
import {readdir} from 'fs/promises';
import {BROWSER_ERROR_MESSAGE} from '../../src/constants';
import {cleanUpPath} from '../utils/file-utils';

const TILESET_URL =
  'https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_3DObjects_1_7/SceneServer/layers/0';
const SLPK_URL = './modules/i3s/test/data/DA12_subset.slpk';
const PGM_FILE_PATH = '@loaders.gl/tile-converter/test/data/egm84-30.pgm';

setLoaderOptions({
  _worker: 'test'
});

// The test is flaky
// test('tile-converter(3d-tiles)#converts i3s to 3d-tiles tileset', async (t) => {
//   if (!isBrowser) {
//     const converter = new Tiles3DConverter();
//     await converter.convert({
//       inputUrl: TILESET_URL,
//       outputPath: 'data',
//       tilesetName: 'SanFrancisco',
//       maxDepth: 2,
//       egmFilePath: PGM_FILE_PATH
//     });
//   }
//   await cleanUpPath('data/SanFrancisco');
//   t.end();
// });

test('tile-converter(3d-tiles)#should return error in browser environment', async (t) => {
  if (isBrowser) {
    const converter = new Tiles3DConverter();
    const tilesetJson = await converter.convert({
      inputUrl: TILESET_URL,
      outputPath: 'data',
      tilesetName: 'SanFrancisco',
      maxDepth: 2,
      egmFilePath: PGM_FILE_PATH
    });
    t.equals(tilesetJson, BROWSER_ERROR_MESSAGE);
  }
  t.end();
});

test('tile-converter(3d-tiles)#converts SLPK file', async (t) => {
  if (!isBrowser) {
    const converter = new Tiles3DConverter();
    await converter.convert({
      inputUrl: SLPK_URL,
      outputPath: 'data',
      tilesetName: 'NY',
      egmFilePath: PGM_FILE_PATH
    });
  }

  const files = await readdir('./data/NY');
  t.equals(files.length, 32);

  await cleanUpPath('data/NY');
  t.end();
});
