import type NodeCache from 'node-cache';

declare global {
  var nodeCache: NodeCache;
}

export {};