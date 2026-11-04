/*
Copyright 2019 Google LLC. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

class CastQueue extends cast.framework.QueueBase {
  constructor() {
    super();

    // const castDebugLogger = cast.debug.CastDebugLogger.getInstance();
    // castDebugLogger.info('Createing new Queue: ', 'init');
    // const item = new cast.framework.messages.QueueItem();
    // item.media = new cast.framework.messages.MediaInformation();
    // // bad doesn't work
    // // http://arc.gt/j67rz

    // // Jesus film in Zarma (does work)
    // // http://arc.gt/c40rw
    

    
    // item.media.streamType = cast.framework.messages.StreamType.BUFFERED;
    // item.media.contentType = "video/hls";
    // item.media.hlsSegmentFormat = 'ts';
    // item.media.metadata = new cast.framework.messages.MovieMediaMetadata();
    // item.media.metadata.title = "JFM MOVIE TEST";
    // item.media.metadata.subtitle = "This is a TEST";
    // item.media.metadata.images =
    //  [new cast.framework.messages.Image("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg")];

    // this.sampleItem = item;
  }

  /**
  * Initializes the queue.
  * @param {!cast.framework.messages.LoadRequestData} loadRequestData
  * @return {!cast.framework.messages.QueueData}
  */
  initialize(loadRequestData) {

    // castDebugLogger.error('JFM: initialize loadRequestData ==', loadRequestData);
    let queueData = loadRequestData.queueData;
    // castDebugLogger.error('JFM: ==', queueData);
    // Create a new queue with media from the load request if one doesn't exist.
    // if (!queueData) {

    //   queueData = new cast.framework.messages.QueueData();
    //   let item = new cast.framework.messages.QueueItem();
    //   item.media = loadRequestData.media;
    //   queueData.items = [item];
    // } else {

    //   castDebugLogger.error('QUEUEDATA FOUND creating request from loadRequestData', loadRequestData);

    // }

    return queueData;
 }

  /**
  * Picks a set of items after the reference item id and returns as the next
  * items to be inserted into the queue. When referenceItemId is omitted, items
  * are simply appended to the end of the queue.
  * @param {number} referenceItemId
  * @return {!Array<cast.framework.QueueItem>}
  */
  nextItems(referenceItemId) {
    // Return sample content.
    return [this.sampleItem];
  }

  /**
  * Picks a set of items before the reference item id and returns as the items
  * to be inserted into the queue. WhenvreferenceItemId is omitted, items are
  * simply appended to beginning of the queue.
  * @param {number} referenceItemId
  * @return {!Array<cast.framework.QueueItem>}
  */
  prevItems(referenceItemId) {
    // Return sample content.
    return [this.sampleItem];
  }
};

export {
  CastQueue
}
