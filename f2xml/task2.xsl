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
                            margin-left: 425px;
                            box-shadow: 3px 3px 5px 5px crimson;
                        }
                        h2{
                            text-align: center;
                            background-color: blue;
                            padding: 30px;
                            letter-spacing: 10px;
                            font-size: 30px;
                            font-weight: 30px;
                            text-shadow: 3px 3px 3px red;

                        }
                    </style>
                </head>

                <body>
                    <h2>TASK</h2>
                    <table border="2" cellspacing="30px" cellpading="30px">
                        <tr>
                            <th  bgcolor="teal" colspan="5">EMPLOYEE TABLE</th>
                        </tr>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Jd</th>
                            <th>Position</th>
                        </tr>
                        <xsl:for-each select="employee">
                            <tr>
                                <td><xsl:value-of select="id"></xsl:value-of></td>
                                <td><xsl:value-of select="name"></xsl:value-of></td>
                                <td><xsl:value-of select="salary"></xsl:value-of></td>
                                <td><xsl:value-of select="jd"></xsl:value-of></td>
                                <td><xsl:value-of select="position"></xsl:value-of></td>
                            </tr>
                        </xsl:for-each>
                    </table>

                </body>
            </html>

</xsl:template>
</xsl:stylesheet>