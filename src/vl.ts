export import axis = require('./axis');
export import aggregate = require('./aggregate');
export import bin = require('./bin');
export import channel = require('./channel');
export {compile}  from './compile/compile';
export import config = require('./config');
export import data = require('./data');
export import datetime = require('./datetime');
export import encoding = require('./encoding');
export import facet = require('./facet');
export import fieldDef = require('./fielddef');
export import legend = require('./legend');
export import mark = require('./mark');
export import scale = require('./scale');
export import sort = require('./sort');
export import spec = require('./spec');
export import stack = require('./stack');
export import timeUnit = require('./timeunit');
export import transform = require('./transform');
export import type = require('./type');
export import util = require('./util');
export import validate = require('./validate');

export const version: string = require('../package.json').version;
