#!/usr/bin/env node
'use strict';

const electron = require('electron');
const proc = require('child_process');
const path = require('path');

const child = proc.spawn(electron, [path.join(__dirname, '..')]);
