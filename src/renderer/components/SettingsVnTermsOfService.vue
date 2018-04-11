<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <v-btn dark icon @click="back">
              <v-icon>chevron_left</v-icon>
            </v-btn>
            <div>
              <h3 class="headline mb-0">{{ $t('settings.termOfService') }}</h3>
            </div>
          </v-card-title>
          <v-card-text class="desc-terms-of-service">
            <p><b><span style='font-size:12.0pt;line-height:115%'>Dự án SEN POINT</span></b></p>

            <p><b><span style='font-size:12.0pt;line-height:115%'>Hợp đồng sử dụng</span></b></p>

            <p>&nbsp;</p>

            <p>Hợp đồng này là bản hợp đồng quy định về việc xử lý khi sử dụng dự án SEN POINTmà khách hàng và công ty cổ phần TTJ cung cấp ( bên dưới là dịch vụ này). Qúy vị sử dụng dịch vụ này  (<a target="_blank" href="http://www.ttjworld.com"><span
                style='color:#1155CC'>http://www.ttjworld.com</span></a> và Wallet SEN POINT) sau khi đồng ý với điều khoản của bản hợp đồng này.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 1 (Định nghĩa)</p>

            <p>&nbsp;</p>

            <p style='text-indent:12.0pt'>Định nghĩa từ dùng trong bản hợp đồng này, được đưa ra như sau:</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(1)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Dịch vụ này  là dịch vụ công ty chúng tôi đang quản lý và các dịch vụ có liên quan.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(2)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trang web này  là trang web mà nội dung dịch vụ này được đăng tải.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(3)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Nội dung này  gọi chung như là chương trính ví tiền, mã code, màn hình chữ, màn hình tĩnh, màn hình động.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(4)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Người sử dụng   là tất cả các vị sử dụng dịch vụ này.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(5)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Người dùng đăng nhập  là những vị đã hoàn tất đăng ký người dùng tại trang web này.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(6)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Địa chỉ mail  là dãy chữ số mà người người dùng có sẵn để sử dụng dịch vụ này.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(7)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Mật khẩu  là mật mã mà người dùng cài đặt phù hợp với ID.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(8)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Thông tin cá nhân    gọi chung là những thông tin có thế xác nhận rõ địa chỉ, tên, nghề nghiệp, số điện thoại, ngày tháng năm sinh… của người dùng.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(9)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Thông tin đăng ký    gọi chung là thông tin mà người dùng đã đăng ký tại trang web này.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 2 (Đồng ý với bản hợp đồng này)</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>1. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hơp đồng quy định rằng người dùng sau khi đồng ý với các điều khoản sử dụng thì có thể sử dụng dịch vụ này.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>2. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Tại thời điểm người dùng tải dịch vụ này về điện thoại hay các thiết bị thông tin khác và hoàn tất thủ tục đồng ý của bản hợp đồng này thì hợp đồng sử dụng theo các quy định của bản hợp đồng này sẽ được thành lập giữa người sử dụng và công ty chúng tôi.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>3. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trong trường hợp người sử dụng là những vị chưa thanh niên, xin vui lòng sử dụng sau khi đã nhận được sự đồng ý của bố mẹ hoặc đại diện pháp lý.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>4. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trong trường hợp người sử dụng là vị thành niên sử dụng dịch vụ này bằng cách giả là có sự đồng ý của người đại diện mặc dù không có hoặc giả là tuổi là thành niên, hay trường hợp lừa đảo để có được tín nhiệm là người có khả năng thực hiện hành động.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>5. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trường hợp vào thời điểm đồng ý điệu khoản hợp đồng, người sử dụng là vị chưa thành niên sử dụng hợp đồng này sau khi thành niên thì hợp động quy định người sử dụng có liên quan đã thừa nhận tất cả hành vi pháp lý liên quan tới dịch vụ này. </p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 3 (Thay đổi điều khoản)</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>1. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Công ty chúng tôi không nhận ủy thác của người sử dụng, bất cứ lúc nào cũng có thể sửa đổi nội dung của bản hợp đồng này.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>2. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Công ty chúng tôi khi sửa đổi hợp đồng này, về nội dung sửa đổi đó sẽ thông báo tới người sử dụng bằng cách thức mà công ty quy định.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>3. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hiệu lực của sửa đổi hợp đồng này như điều trên sẽ có hiệu lực từ thời điểm công ty tôi tiến hành thông báo bằng mục phía trên.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>4. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Sau khi thay đổi hợp đồng này, tại thời điểm người sử dụng dùng dịch vụ này thì được coi như là người sử dụng không phản đối mà đã đồng ý với hợp đồng sử dụng dịch vụ này.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 4 (Thủ tục đăng ký thành viên)</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>1. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Những vị có mong muốn đăng ký dịch vụ này (bên dưới là “người muốn đăng ký” thì sau khi đồng ý với bản hợp đồng này, thì hãy tiến hành đăng ký bằng cách thức quy định.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>2. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Những vị đã đăng ký thì từ thời điểm công ty tôi chấp nhận đăng ký, và hoàn tất ID đăng ký thì sẽ trở thành người dùng đăng nhập.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>3. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Công ty tôi sẽ tiến hành thông báo liên hệ và cung cấp thông tin khác qua thư cho người dùng.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>4. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trường hợp người muốn đăng ký dùng có liên quan đến bất cứ trường hợp nào sau đây thì cũng có khi công ty tôi bằng phán đoán của mình sẽ không chấp nhận đăng ký.</p>

            <p style='margin-left:84.0pt;text-indent:-54.0pt'>Thứ nhất,<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>trường hợp tiến hành đăng ký không bằng cách do công ty tôi quy định.</p>

            <p style='margin-left:68.0pt;text-indent:-38.0pt'>Thứ 2,<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>trường hợp người muốn đăng ký là người đã nhận hình phạt ra khỏi hội vì lí do như vi phạm hợp đồng này trong quá khứ hay vi phạm điều khoản sử dụng công ty quy định.</p>

            <p style='margin-left:68.0pt;text-indent:-38.0pt'>Thứ 3,<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>trường hợp công ty tôi biết được là tiến hành đăng ký bằng cách thức bất chính.</p>

            <p style='margin-left:68.0pt;text-indent:-38.0pt'>Thứ 4,<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>trường hợp người muốn sử dụng đăng ký thông tin không phải của mình.</p>

            <p style='margin-left:68.0pt;text-indent:-38.0pt'>Thứ 5,<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>những trường hợp khác công ty tôi đã biết là không hợp lý.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 5 (Quản lý tài khoản)</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>1. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Về thông tin đã đăng ký trước khi sử dụng, người dùng sẽ đăng ký, quản lý tùy ý dưới trách nhiệm của bản thân. Người dùng không được lấy những thông tin này cho bên thứ 3 sử dụng, hay cho thuê, nhượng quyền,thay đổi danh nghĩa, buôn bán...</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>2. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trường hợp đã sử dụng dịch vụ này bằng thông tin đăng ký công ty tôi quy định người đã đăng ký sử dụng sẽ có thể sử dụng, về kết quả do việc sử dụng tạo ra hay tất cả trách nhiệm cùng với điều đó đều thuộc về bản thân người đã tiến hành đăng ký sử dụng.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>3. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trường hợp tổn thất do người sử dụng sử dụng ko chính đáng thông tin đăng ký dẫn đến tổn thất cho công ty tôi hay bên thứ 3 thì người sử dụng sẽ bồi thường thiệt hại tương ứng cho công ty tôi và bên thứ 3 có liên quan.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>4. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Việc quản lý thông tin đăng ký sẽ thuộc trách nhiệm của người sử dụng và công ty tôi không chịu trách nhiệm về bất cứ thiệt hại mà người sử dụng đã gây ra vì thông tin đăng ký không chính xác hoặc sai.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>5. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Trong trường hợp thông tin đăng ký bị đánh cắp hoặc phát hiện ra bị bên thứ ba đang sử dụng, người sử dụng phải thông báo ngay cho Công ty và làm theo chỉ dẫn của công ty.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 6 (Xử lý thông tin cá nhân)</p>

            <p>&nbsp;</p>

            <p style='margin-left:12.0pt'>Về thông tin cá nhân hay thông tin của người dùng, chúng tôi sẽ xử lý nó một cách phù hợp theo "Chính sách bảo mật của dự án SEN POINT" mà công ty tôi quy định.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 7 (Hành vi cấm）</p>

            <p>&nbsp;</p>

            <p style='margin-left:12.0pt'>Khi sử dụng dịch vụ này công ty nghiêm cấm các hành vi sau đây đối với người dùng. Công ty tôi có thể có những biện pháp tạm ngưng dùng cho người dùng, hình thức đóng băng tài khoản hoặc thực hiện các biện pháp khác nếu công ty tôi biết rằng người dùng đã vi phạm điều cấm.</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(1)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi làm tổn hại danh dự hay uy tín của công ty tôi hoặc bên thứ ba, hoặc phân biệt hoặc vu khống không đúng.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(2)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi chiếm đoạt hoặc hành vi có thể chiếm đoạt tài sản của công ty tôi hay bên thứ 3.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(3)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi gây ra tổn thất kinh tế cho công ty tôi hay bên thứ 3.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(4)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi đe dọa đối với công ty tôi hoặc bên thứ 3.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(5)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi tạo ra vi rút máy tính, chương trình độc hại spec hoặc những hành vi gây ra những điều này.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(6)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi tạo ra gánh nặng quá mức đối với cơ sở hạ tầng dùng trong dịch vụ này.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(7)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi tấn công máy chủ, hệ thống, bảo mật trang web của chúng tôi.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(8)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Hành vi cố truy cập dịch vụ của chúng tôi bằng các phương pháp ngoài giao diện chúng tôi cung cấp.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>(9)<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Ngoài những điều đã nêu trên, hành vi mà công ty tôi biết được là không đúng.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 8 (Miễn trách)</p>

            <p>&nbsp;</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>1. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Công ty tôi sẽ không chịu bất cứ trách nhiệm về những tổn thất do thay đổi nội dung, ngưng sử dụng, hay kết thúc dịch vụ này.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>2. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Công ty tôi không có bất cứ liên quan hay trách nhiệm về môi trường sử dụng dịch vụ của người dùng.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>3. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Về những việc như việc dịch vụ này phù hợp với mục đích của người dùng, việc làm cho có tính năng mong muốn hay giá trị thương mại, tính chính xác, tính hữu dụng, việc sử dụng dịch vụ này bởi người dùng sẽ phù hợp với nghị định thích hợp với người sử dụng hay quy định nội bộ của nghiệp đoàn, và việc không xảy ra lỗi thì không phải là việc công ty chúng tôi đảm bảo.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>4. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Công ty tôi không đảm bảo dịch vụ này sẽ phù hợp với tất cả thiết bị thông tin, về việc cùng với nâng cấp phiên bản OS của thiết bị thông tin sử dụng dịch vụ này thì có khả năng phát sinh lỗi trong thao tác dịch vụ, người sử dụng đã chấp nhận điều này. Trong trường hợp phát sinh lỗi công ty tôi sẽ tiến hành sửa chữa chương trình , nhưng việc các lỗi liên quan có được loại bỏ thì công ty chúng tôi không đảm bảo.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>5. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Người sử dụng chấp nhận trước rằng cùng với thay đổi hợp đồng sử dụng hay phương châm vận dụng tại cửa hàng dịch vụ như AppStore, GooglePlay thì có khả năng bị giới hạn toàn bộ hoặc một phần dịch vụ này.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>6. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Công ty tôi sẽ không chịu bất cứ trách nhiệm bồi thường về những tổn hại do người sử dụng trực tiếp hay gián tiếp gây ra khi sử dụng dịch vụ này. </p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>7. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Công ty tôi đã thông báo trước khả năng tổn thất, công ty tôi sẽ không chịu trách nhiệm đối với tổn thất như đánh mất cơ hội, gián đoạn kinh doanh hay những tổn thất khác do người dùng hay bên thứ 3 gây ra.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>8. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Quy định từ mục 1 đến mục 7 không áp dụng với trường hợp có sự cố ý hay gây tổn thất nặng tới công ty tôi, hoặc trường hợp bản hợp đồng có liên quan tới người tiêu dùng trên mặt luật hợp đồng tiêu dùng.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>9. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span> Về tổn hại từ những trường hợp đặc biệt trong tổn hại do người dùng gây ra bằng những hành vi do lỗi ( ngoại trừ lỗi lớn) dù là trường hợp được áp dụng ở điều trên thì công ty tôi hoàn toàn không có trách nhiệm.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>10.<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Trường hợp công ty tôi chịu trách nhiệm bồi thường tổn hại về sử dụng dịch vụ này, công ty tôi sẽ chịu trách nhiệm bồi thường khoản tiền đã nhận từ khách hàng trong tháng phát sinh thiệt hại liên quan.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>11.<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Công ty tôi không chịu bất cứ trách nhiệm nào về tranh chấp hoặc sự cố nào giữa người dùng và người dùng khác. Dù là trường hợp đã phát sinh sự cố giữa người dùng và người dùng khác thì không thể yêu cầu công ty tôi bất cứ điều gì, việc giải quyết sự cố là trách nhiệm của 2 bên với nhau.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>12.<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Liên quan đến việc sử dụng dịch vụ này, trong trường hợp gây tổn hại cho người dùng khác hoặc trong trường hợp có tranh chấp với bên thứ ba, người dùng sẽ phải bồi thường thiệt hại liên quan và trách nhiệm giải quyết tranh chấp, và không gây bất cứ phiền phức hay tổn hại gì cho công ty tôi.</p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>13.<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Trường hợp công ty tôi phải yêu cầu bên thứ ba bồi thường thiệt hại do hành động của người dùng, công ty tôi sẽ giải quyết bằng chi phí (phí luật sư) và trách nhiệm của người sử dụng. Trong trường hợp công ty tôi đã trả chi phí bồi thường cho bên thứ 3 liên quan, người sử dụng sẽ thanh toán tất cả các chi phí bao gồm phí bồi thường thiệt hại liên quan (bao gồm phí luật sư và lợi nhuận bị mất) cho công ty tôi.</span></p>

            <p style='margin-left:32.0pt;text-indent:-20.0pt'>14.<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Trường hợp về việc sử dụng dịch vụ này người sử dụng đã gây ra tổn thất cho công ty tôi, người sử dụng sẽ bồi thường tổn thất cho công ty tôi bằng chi phí và trách nhiệm của người sử dụng (bao gồm chi phí kiện cáo và thuê luật sư).</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 9 (Về đăng quảng cáo)</p>

            <p>&nbsp;</p>

            <p style='margin-left:12.0pt;'>Người sử dụng hiểu và chấp nhận rằng có trường hợp trên hệ thống sẽ gồm có tất cả các quảng cáo, và có trường hợp công ty tôi hay bên liên kết sẽ đăng tất cả quảng cáo. Hình thức và phạm vi của quảng cáo trên dịch vụ này sẽ được công ty chúng tôi thao đổi vào tùy thời điểm.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 10 (Cấm chuyển nhượng quyền)</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>1. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Người dùng sẽ không thể nhượng một phần hay tất cả quyền hoặc nghĩa vụ cho bên thứ 3 căn cứ theo điều khoản và quy định trong bản hợp đồng này, nếu chưa có sự đồng ý trước của công ty tôi trên mặt văn bản.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>2. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Công ty tôi có thể chuyển nhượng một phần hoặc toàn bộ dịch vụ này theo cách xử lý của công ty tôi. Trường hợp đó, tất cả quyền lợi của người sử dụng có liên quan đến dịch vụ này bao gồm tài khoản của người dùng trong phạm vi quyền hạn đã được chuyển nhượng sẽ được chuyển cho bên chuyển nhượng.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 11 (Khả năng phân chia)</p>

            <p>&nbsp;</p>

            <p style='margin-left:12.0pt;'>Bất kỳ điều khoản hay phần nào của điều luật này, ngay cả khi nó được xác định là sai hoặc không thể thực thi theo pháp luật hợp đồng tiêu dùng hay các luật khác, các điều khoản còn lại và một số thuật ngữ không hợp lệ hay không thể thực thi của các quy định được xác định vẫn có hiệu lực đầy đủ để tiếp tục.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 12 (Cách thức liên lạc với công ty tôi)</p>

            <p>&nbsp;</p>

            <p style='margin-left:12.0pt;'>Liên lạc hay thắc mắc của người dùng về dịch vụ này tới ông ty tôi sẽ được tiến hành bằng cách việc gửi tin hay công ty tôi đang vận hành theo cách công ty tôi quy định. </p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Điều 13 (Luật căn cứ, tòa án trực thuộc)</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>1. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Về hiệu lực, giải thích và thi hành bản hợp điều khoản này, sẽ được căn cứ và giải thích theo luật Nhật bản.</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>2. <span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span>Đối với các cuộc thảo luận, kiện tụng và bất kỳ tranh chấp nào khác giữa công ty tôi và người sử dụng, Toà án pháp luật Tokyo hay Toà án địa phương Tokyo sẽ là tòa thẩm án độc quyền theo khoản kiện cáo.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>Thi hành ngày 1 tháng 1 năm 2018</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    data () {
      return {
        back () {
          router.go(-1)
        }
      }
    },
    methods: {},
    mounted () {
      this.$store.dispatch('app/setShowDrawer', true)
      this.$store.dispatch('app/init')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .desc-terms-of-service p {
    margin: 0cm;
    margin-bottom: .0001pt;
    line-height: 115%;
    font-size: 11.0pt;
    font-family: "Arial", sans-serif;
    color: black;
  }
</style>
