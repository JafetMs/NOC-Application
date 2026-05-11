export const htmlHenequen = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
</head>

<body style="
  margin:0;
  padding:40px 0;
  background:#080c10;
  font-family:Arial, Helvetica, sans-serif;
">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="620" cellpadding="0" cellspacing="0" style="
          background:#0b1118;
          border:1px solid #13202d;
          border-radius:24px;
          overflow:hidden;
        ">

          <!-- Header -->
          <tr>
            <td style="
              padding:38px 42px;
              background:#091019;
              border-bottom:1px solid #13202d;
            ">

              <div style="
                color:#14b8a6;
                font-size:34px;
                font-weight:700;
                letter-spacing:-1px;
              ">
                Henequén POS
              </div>

              <div style="
                color:#64748b;
                margin-top:8px;
                font-size:14px;
              ">
                Payment confirmation receipt
              </div>

            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:42px;">

              <div style="
                color:white;
                font-size:28px;
                font-weight:600;
                margin-bottom:10px;
              ">
                Payment Received
              </div>

              <div style="
                color:#7c8ca0;
                font-size:15px;
                line-height:1.7;
                margin-bottom:34px;
              ">
                Your transaction has been processed successfully.
                Below is your purchase summary.
              </div>

              <!-- Transaction Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="
                background:#0a0f15;
                border:1px solid #182532;
                border-radius:18px;
              ">

                <tr>
                  <td style="padding:30px;">

                    <table width="100%">

                      <tr>
                        <td style="
                          color:#64748b;
                          padding-bottom:20px;
                          font-size:14px;
                        ">
                          Transaction ID
                        </td>

                        <td align="right" style="
                          color:white;
                          font-weight:700;
                          font-size:15px;
                          padding-bottom:20px;
                        ">
                          #POS-20391
                        </td>
                      </tr>

                      <tr>
                        <td style="
                          color:#64748b;
                          padding-bottom:20px;
                          font-size:14px;
                        ">
                          Product
                        </td>

                        <td align="right" style="
                          color:white;
                          font-size:15px;
                          padding-bottom:20px;
                        ">
                          Gaming Keyboard
                        </td>
                      </tr>

                      <tr>
                        <td style="
                          color:#64748b;
                          padding-bottom:24px;
                          font-size:14px;
                        ">
                          Payment Method
                        </td>

                        <td align="right" style="
                          color:white;
                          font-size:15px;
                          padding-bottom:24px;
                        ">
                          Credit Card
                        </td>
                      </tr>

                      <tr>
                        <td colspan="2">
                          <div style="
                            height:1px;
                            background:#182532;
                            margin-bottom:24px;
                          "></div>
                        </td>
                      </tr>

                      <tr>
                        <td style="
                          color:#14b8a6;
                          font-size:15px;
                          font-weight:700;
                        ">
                          Total
                        </td>

                        <td align="right" style="
                          color:#14b8a6;
                          font-size:26px;
                          font-weight:700;
                        ">
                          $249.00
                        </td>
                      </tr>

                    </table>

                  </td>
                </tr>

              </table>

              <!-- Button -->
              <div style="margin-top:36px;">

                <a href="#" style="
                  background:#14b8a6;
                  color:#071014;
                  text-decoration:none;
                  display:inline-block;
                  padding:16px 28px;
                  border-radius:14px;
                  font-weight:700;
                  font-size:14px;
                ">
                  View Transaction
                </a>

              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              padding:30px 42px;
              border-top:1px solid #13202d;
              background:#091019;
            ">

              <div style="
                color:#64748b;
                font-size:13px;
                line-height:1.7;
              ">
                This email was generated automatically by Henequén POS.<br>
                © 2026 Henequén. All rights reserved.
              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;