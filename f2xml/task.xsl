<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/bank">

            <html>
                <head>
                    <title>XSL WORK</title>
                    <style>
                        body{
                            background-color: black;
                            color: white;
                        }
                        table{
                            margin-left: 350px;
                            box-shadow: 3px 3px 5px 5px crimson;
                        }
                    </style>
                </head>
                <body>
                    <h2>TASK</h2>
                    <table border="2" cellspacing="30px" cellpading="30px">
                        <tr>
                            <th colspan="4">BANK EMPLOYEE TABLE</th> 
                        </tr>

                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SALARY</th>
                        </tr>
                        <xsl:for-each select="employee">
                            <tr>
                                <td><xsl:value-of select="id"></xsl:value-of></td>
                                <td><xsl:value-of select="name"></xsl:value-of></td>
                                <td><xsl:value-of select="salary"></xsl:value-of></td>
                            </tr>
                        </xsl:for-each>

                    </table>
                </body>
            </html>

</xsl:template>

</xsl:stylesheet>