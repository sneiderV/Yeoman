'use strict';

var employee = portalFuncionarioApp.factory(
  'MemorandumDto', function() {

    function Employee () {
      this.name = "";
      this.dept = "general";
    }



   MemorandumDto.buildEmpty = function() {
    return new MemorandumDto('', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '');
   };

   return MemorandumDto;

  });
