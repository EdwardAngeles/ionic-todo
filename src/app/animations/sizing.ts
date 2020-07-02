import {
  AnimationReferenceMetadata,
  animation,
  style,
  animate,
  keyframes
} from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const shrinkHeight = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease',
    keyframes([
      style({
        height: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
      })
    ]),
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);