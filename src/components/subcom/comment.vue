<template>
  <div>
    <h4>发表评论</h4>

    <hr>

    <textarea rows="3" placeholder="请输入要BB的内容(最多BB120个字)" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div id="comment-list">
      <div class="comment-box">
        <div class="comment-title">第1楼&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12:12:12</div>
        <div class="comment-body">
          雷布斯说： Are you okay. Do you like me. Mi fans.
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain>发表评论</mt-button>
  </div>
</template>


<script>

</script>

<style lang="scss" scoped>
textarea {
  margin: 0;
  font-size: 14px;
}

#comment-list {
  margin: 5px 0;

  .comment-box {
    font-size: 13px;
    .comment-title {
      background-color: #ccc;
      line-height: 30px;
    }
    .comment-body {
      font-size: 14px;
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>
