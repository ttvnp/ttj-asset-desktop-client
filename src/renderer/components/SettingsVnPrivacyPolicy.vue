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
              <h3 class="headline mb-0">{{ $t('settings.privacyPolicy') }}</h3>
            </div>
          </v-card-title>
          <v-card-text class="desc-privacy-policy">
            <p>Trong chính sách bảo mật này, Công ty cổ phần TTJ và các công ty con đó gọi chung là "Công ty tôi" sẽ giải thích về làm sao để thu thập, sử dụng, công khai, bảo vệ thông tin của khách hàng.</p>

            <p>&nbsp;</p>

            <p>Thông tin được áp dụng trong chính sách này là những thông tin công ty tôi thu thập khi khách hàng truy cập vào trang web hay ứng dụng di động của TTJ (gọi chung là dự án SEN POINT), sử dụng những thông tin đó hoặc sẽ trao đổi thông tin với công ty tôi bằng một cách khác theo cách thức giải thích ở bên dưới:<p>

            <p>&nbsp;</p>

            <p>Công ty tôi đôi lúc sẽ chỉnh sửa chính sách bảo mật này. Trường hợp thay đổi, công ty tôi sẽ thông báo tới khách hàng bằng việc sửa ngày của chính sách này. Hoặc tùy vào tình huống, ví dụ như công ty tôi sẽ liên lạc thêm điều khoản bằng việc gửi thông báo qua mail hoặc LINE tới khách hàng là sẽ thêm những gì đã thay đổi vào trang chủ của dự án SEN POINT.
            Để duy trì tình trạng biết về quyền lợi và lựa chọn của khách hàng liên quan tới thông tin bảo mật, riêng tư của công ty tôi thì chúng tôi rất khuyến cáo khách hàng xem lại chính sách bảo mật mỗi lần truy cập vào dự án SEN POINT hay mỗi lần sử dụng dịch vụ này.
            <p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p><b><span style='font-size:14.0pt;line-height:115%'>Thu thập thông tin</span></b></p>

            <p>&nbsp;</p>

            <p><b>Thông tin khách hàng cung cấp cho công ty tôi</b></p>

            <p><b>&nbsp;</b></p>

            <p>Công ty tôi sẽ thu thập những thông tin mà khách hàng trực tiếp cung cấp cho công ty tôi. Chúng tôi sẽ thu thập thông tin khách hàng khi khách hàng tạo tài khoản, kết thúc giao dịch, viết vào form mẫu, trả lời điều tra, đăng thư vào form mẫu của công ty tôi, hay khi gửi tin cho công ty tôi bằng cách thức khác.</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p><b>Các loại thông tin có thể thu thập là những loại như sau:</b></p>

            <p style='margin-left:30.0pt'>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Thông tin liên lạc (tên khách hàng, địa chỉ, số điện thoại, địa chỉ e-mail, ...).</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Thông tin tài chính (số thẻ tín dụng, thông tin tài khoản tiền tệ ảo, v.v ...).<p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Số ID chính phủ phát hành  (giấy phép lái xe, thông tin hộ chiếu, v.v ...).</p>

            <p style='margin-left:30.0pt;text-indent:-18.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Thông tin nhân khẩu học (ngày sinh, giới tính, nghề nghiệp, tình hình việc làm, thông tin khác).<p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p><b>Thông tin mà công ty tôi thu thập từ các nguồn thông tin khác</b></p>

            <p>&nbsp;</p>

            <p>Cũng có trường hợp công ty tôi thu thập thông từ nguồn thông tin khác và kết hợp với thông tin thu thập qua dự án SEN POINT.</p>

            <p>Ví dụ, có trường hợp công ty tôi thu thập từ bên thứ 3 bao gồm thông tin cá nhân không công khai, cơ quan dịch vụ xác minh danh tính khách hàng.<p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p><b>Thông tin công ty tự động thu nhập</b></p>

            <p>&nbsp;</p>

            <p>Khi khách hàng truy cập vào dự án SEN POINT hay khi sử dụng dự án này, Công ty tôi sẽ tự động thu thập thông tin như sau:</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-17.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Thông tin giao dịch</b>:
              Thu thập SEN POINT, bao gồm các khoản đầu tư tương ứng với giao dịch, loại giao dịch đã được thực hiện, và các thông tin giao dịch khác.</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-17.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Thông tin vị trí</b>:
              Nhận được sự đồng ý của khách hàng từ trước, có trường hợp chúng tôi có thể thu thập thông tin vị trí địa lí cụ thể từ thiết bị di động của khách hàng khi khách hàng truy cập hay sử dụng ứng dụng của công ty tôi. Chi tiết xin hãy tham khảo phần "Lựa chọn của khách hàng" viết bên dưới.<p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-17.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Thông tin thiết bị và đăng nhập</b>:
              Công ty tôi thu thập thông tin về thiết bị di động hay máy tính đang sử dụng để truy cập dịch vụ dự án SEN POINT bao gồm định danh thiết bị, thông tin mạng di động, loại hệ điều hành và trình duyệt đang sử dụng.Ngoài ra, công ty tôi sẽ ghi chép cả những thông tin về tình trạng sử dụng dịch vụ dự án SEN POINT của khách hàng bao gồm thời gian truy cập, trang web đã hiển thị, địa chỉ IP, dữ liệu web tieu chuẩn khác và các trang đã truy cập trước và sau khi chuyển đến các trang web của công ty tôi.<p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-17.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Cookie và công nghệ theo dõi tương tự</b>:
              Có trường hợp công ty tôi sẽ sử dụng công nghệ Cookie và các công nghệ khác để thu thập thông tin về khách hàng khi khách hàng liên hệ với dịch vụ dự án SEN POINT, bao gồm thông tin về hành động xem trên dịch vụ dự án SEN POINT của công ty tôi. Cookie là một tệp dữ liệu nhỏ được gửi từ máy chủ web của chúng tôi tới máy tính hay thiết bị di động của khách hàng. Bằng những tệp dữ liệu này thì có thể nắm bắt được khách hàng vào dịch vụ SEN POINT như thế nào, khi nào quay trở lại, đã thăm những trang nào và công ty tôi cũng có thể nhận biết được việc đã hoàn thành đăng nhập khi nhận được yêu cầu trang từ trình duyệt của khách hàng.<p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p><b>Sử dụng thông tin</b></p>

            <p>&nbsp;</p>

            <p>Có trường hợp công ty tôi sẽ sử dụng thông tin khách hàng như sau:</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Cung cấp dịch vụ dự án SEN POINT và hỗ trợ khách hàng.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Xử lý giao dịch và gửi cho khách hàng thông báo về giao dịch của khách hàng.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Quản lý tài khoản của khách hàng và gửi thông báo kỹ thuật, địa chỉ liên hệ, cảnh báo an toàn, hỗ trợ và thông báo quản lý.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Tiến hành giải quyết các tranh chấp, thu phí, và khắc phục sự cố.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Ngăn chặn hoạt động tiềm ẩn đã bị cấm hoặc phạm pháp, và tiến hành thực thi điều khoản sử dụng dịch vụ.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Tiến hành cá nhân hóa, đo lường và cải tiến dự án dịch vụ SEN POINT.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Đại diện của dự án SEN POINT và các công ty khác sẽ gửi tiếp thị hoặc khuyến mại gồm các trường hợp bằng SMS, điện thoại, hay e-mail.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Công ty tôi sẽ liên kết, phối hợp thông tin cá nhận của khách hàng với thông tin nhận được từ công ty khác để dễ dàng biết được thị hiếu khách hàng và cung cấp dịch vụ tốt hơn cho khách hàng.</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span>Mục địch của công ty tôi là sẽ hoàn thành mục tiêu khác ngoài mục tiêu thông tin được thu thập theo nội dung thông báo bằng cách thức khác trong phạm vi buộc phải được xem xét bằng thu thập thông tin cá nhân của khách hàng hay trong dự án SEN POINT tại thời điểm thu thập thông tin.</p>

            <p>&nbsp;</p>

            <p><br>
              <b>Công khai thông tin</b></p>

            <p>&nbsp;</p>

            <p>Có trường hợp công ty tôi sẽ công khai cho bên thứ 3 ngoài công ty liên kết không kể khách hành là khách hàng hiện nay, hay khách hàng trước kia, bao gồm thông tin không công khai hay do công ty khác thu thập hay thông tin công ty tôi tự thu thập về khách hàng.<p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-17.0pt'>(1)<span
              style='font:7.0pt "Times New Roman"'>&nbsp; </span>Đối với các nhà cung cấp dịch vụ tiến hành các dịch vụ tiếp thị thay cho chúng tôi.</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-17.0pt'>(2)<span
              style='font:7.0pt "Times New Roman"'>&nbsp; </span>Cũng có trường hợp tiến hành vì mục đích kinh doanh hằng ngày của công ty chúng tôi như để xử lý giao dịch, để duy trì tài khoản, để đáp ứng lệnh của tòa án hay điều tra pháp lý, để báo cáo cho cơ quan điều tra tín dụng. Ví dụ, về mục tiêu kinh doanh hằng ngày của công ty tôi thì cũng có trường hợp cung cấp thông tin về khách hàng như vậy.</p>

            <p>&nbsp;</p>

            <p style='margin-left:48.0pt;text-indent:-20.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Đối tượng đại diện cho dự án SEN POINT để khách hàng phân chia vốn hay nhà cung cấp dự định phân chia vốn cho khách hàng ( Bao gồm thông tin tài khoản của khách hàng có hoạt động không và tài khoản đã hoàn tất xác minh chưa).</p>

            <p style='margin-left:48.0pt;text-indent:-20.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Các nhà cung cấp, tư vấn và các nhà cung cấp khác cần tiếp cận với thông tin của khách hàng để thực hiện công việc thay mặt cho Công ty. Các nhà cung cấp dịch vụ này sẽ hỗ trợ nghiệp vụ của chúng tôi như phòng chống lừa đảo và dịch vụ kỹ thuật.</p>

            <p style='margin-left:48.0pt;text-indent:-20.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Trường hợp công ty tôi xem xét theo quan điểm của mình là cần công khai thông tin của khách hàng để ngăn ngừa những tổn thất vật chất hoặc tổn thất tài chính, để báo cáo các hoạt động bị nghi ngờ phạm pháp, để điều tra vi phạm đối với mục đồng ý của người dùng hay mục đồng ý hay chính sách an toàn khác, hay để thực hiện những điều này.</p>

            <p style='margin-left:48.0pt;text-indent:-20.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Liên quan đến một phần hoặc toàn bộ nghiệp vụ đối với việc sáp nhập, mua bán, tài trợ, thu mua tài sản của dự án SEN POINT hay đối với công ty khác, hoặc đang trong quá trình đàm phán.<p>

            <p style='margin-left:48.0pt;text-indent:-20.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Bằng sự đồng ý hoặc theo ý của khách hàng.</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-17.0pt'>(3)<span
              style='font:7.0pt "Times New Roman"'>&nbsp; </span>Trong trường hợp công ty tôi có nghĩa vụ công khai hoặc chia sẻ thông tin của khách hàng để tuân thủ nghĩa vụ pháp lý của công ty tôi.</p>

            <p>&nbsp;</p>

            <p>Trường hợp không liên quan tới sáp nhập, bán, tài trợ, hay thu mua tài sản dự án SEN POINT thì không thể bán hay cho bên thứ 3 mượn bất cứ thông tin nào của khách hàng với mục đích tiếp thị cá nhận của bên thứ 3.<br>
              <br>
              Có trường hợp bên thứ 3 đang hỗ trợ cơ cấu kiểm soát giúp nhận diện khách hàng của công ty tôi và phòng chống lừa đảo sẽ đại diện cho công ty tôi giữ và sử dụng thông tin khách hàng để tiến hành dịch vụ và cải thiện dịch vụ của công ty mình.<br>
              <br>
              Bằng việc sử dụng dịch vụ này, khách hàng đã đồng ý cho các nhà cung cấp này giữ và sử dụng thông tin cá nhân của khách hàng để cải thiện các dịch vụ của các nhà cung cấp này. Sẽ có trường hợp công ty tôi cung cấp thông tin có cường độ cao hay thông tin không chỉ định với bên thứ 3 ngoài các công ty liên quan ( Những thông tin này không thể sử dụng để xác nhận khách hạn).<p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p><b>Dịch vụ phân tích cung cấp do công ty khác cung cấp</b></p>

            <p>&nbsp;</p>

            <p>Công ty tôi sẽ cho phép công ty khác đại diện cung cấp dịch vụ phân tích. Cũng có trường hợp các thực thể này sẽ sử dụng Cookie, Web beacon và các công nghệ theo dõi khác, thu thập thông tin về tình hình sử dụng của khách hàng của dịch vụ dự án SEN POINT  bao gồm địa chỉ IP, trình duyệt web, trang đã hiển thị, thời gian đã dùng cho các trang, và các link đã kích vào.  Bằng dự án SENPOINT có trường hợp thông tin này sẽ được sử dụng đặc biệt để phân tích, theo dõi dữ liệu, xác định độ được yêu thích của nội dung cụ thể để hiểu chính xác hơn, để hiểu chính xác hơn hoạt động trực tuyến của khách hàng.<br>
            <br>
            </p>

            <p>&nbsp;</p>

            <p><b>Bảo mật</b></p>

            <p>&nbsp;</p>

            <p>Công ty tôi đang thực hiện các chính sách bảo mật hợp lý để bảo đảm tính bảo mật và bảo an thông tin của khách hàng bao gồm thông tin cá nhân không công khai. Công ty tôi bảo vệ thông tin khách hàng bằng những chính sách hợp lý trên mặt vật chất, ký thuật, quản lý, ví dụ như giới hạn cho nhân viên cần biết những thông tin liên quan đến truy cập vào thông tin khách hàng.<br>
            <br>
            </p>

            <p>&nbsp;</p>

            <p><b>Lựa chọn của khách hàng</b></p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Thông tin tài khoản</b>
              : Bằng cách đăng nhập vào tài khoản và hiển thị hồ sơ thì có thể truy cập vào thông tin tài khoản bất cứ lúc nào, có thể tiến hành liên hệ với công ty tôi. Tuy nhiên, trường hợp khách hàng đóng tài khoản, thì xin lưu ý rằng nếu cần thiết cũng có trường hợp công ty tôi giữ lại thông tin của quý khách với mục đích hợp lý của công ty tôi theo pháp luật, để thu phí chưa nộp, giải quyết tranh chấp, khắc phục sự cố, hỗ trợ điều tra, ngăn chặn các hành vi lừa đảo, hay để nâng cao thêm các điều khoản sử dụng.</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Cài đặt nhận tin</b>
              : Qúy khách có thể chọn nhận thông tin quảng cáo từ dự án SEN POINT theo hướng dẫn trong thông tin truyền thông quảng cáo. Trường hợp quý khác đã chọn nhận thông tin quảng cáo, cũng có trường hợp công ty tôi có thể gửi cho quý khách "thông điệp dựa trên mối quan hệ giao dịch hoặc kinh doanh" chẳng hạn như thông báo về tài khoản của quý khách hoặc các mục liên quan đến việc kinh doanh hiện tại.<p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Vị trí</b>
              : Ứng dụng di động của công ty tôi sau khi nhận được sự đồng ý của quý khách thì có thể biết được vị trí địa lý chi tiết từ thiết bị di động của quý khách. Trường hợp đã có sự đồng ý cho pháp thu thập thông tin vị trí từ trước của quý khách, tùy thuộc vào hệ điều hành của thiết bị di động mà cũng có trường hợp sau khi nhận thông tin này sẽ ngừng. Bằng cách xóa ứng dụng di động khỏi thiết bị di động theo quy trình gỡ cài đặt tiêu chuẩn sẽ có thể ngừng thu thông tin định vị.</p>

            <p>&nbsp;</p>

            <p style='margin-left:30.0pt;text-indent:-16.0pt'>・<span
              style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;</span><b>Cookies</b>
              : Công ty tôi sử dụng cookie theo phần và cookie liên tục. Cookie theo phần sẽ hết hạn khi quý khách đăng xuất khỏi tài khoản hoặc đóng trình duyệt.  Chừng nào quý khách chưa xóa nó đi hoặc nó chưa hết hạn do một nguyên nhân khác thì Cookie liên tục sẽ vẫn còn trên máy tính, thiết bị di động của quý khách. Theo mặc định, hầu hết các trình duyệt web đều chấp nhận Cookie.  Trình bổ sung của trình duyệt hoặc trình duyệt của quý khách, thì có thể từ chối hầu hết các cookie một cách tự do. Nếu quý khách chọn xoá hoặc làm mất hiệu lực cookie của công ty tôi, cũng có trường hợp sẽ ảnh hưởng tới việc sử dụng hoặc chức năng của dịch vụ dự án SEN POINT. Ngoài ra, cũng có trường hợp công ty tôi sẽ sử dụng các cookie cố định vĩnh viễn, Cookie vĩnh viễn này chỉ sử dụng cho mục đích xác minh danh tính và phòng chống lừa đảo. Để biết chi tiết về cookie và cách chặn, xóa, hủy bỏ hiệu lực của Cookie, xin vui lòng tham khảo hướng dẫn trên trình duyệt hoặc liên hệ công ty tôi.<br>
              <br>
            </p>

            <p>&nbsp;</p>

            <p><b>Liên hệ giải đáp thắc mắc</b></p>

            <p>&nbsp;</p>

            <p>Trường hợp có thắc mắc gì liên quan đến chính sách bảo mật này xin vui lòng liên hệ trang web của TTJ tại <a href="/contact-us">Contact US</a>.</p>

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
      return {}
    },
    methods: {
      back () {
        router.go(-1)
      }
    },
    mounted () {
      this.$store.dispatch('app/setShowDrawer', true)
      this.$store.dispatch('app/init')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .desc-privacy-policy p {
    margin:0cm;
    margin-bottom:.0001pt;
    line-height:115%;
    font-size:11.0pt;
    font-family:"Arial",sans-serif;
    color:black;
  }
</style>
