<?xml version="1.0" encoding="UTF-8"?>


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/music">

                <html>
                    <head>
                        <title>XSL WORK</title>
                        <style>
                            body{
                                background-color: white;
                                color: blue;
                            }
                            table{
                                margin-left: 515;
                                box-sadow: 3px 3px 5px 5px crimson;
                            }
                            h2{
                                text-align: center;
                                background-color: black;
                                padding: 30px;
                                letter-spacing: 10px;
                                font-size: 30px;
                                font-weight: 30px;
                                text-shadow: 3px 3px 3px white;
                            }
                        </style>
                    </head>
                    <body>
                        <h2>MY CD COLLECTION</h2>
                        <table border="2">
                            <tr>
                                <th bgcolor="teal">Title</th>
                                <th bgcolor="teal">Artist</th>
                            </tr>
                            <xsl:for-each select="cd">
                                <tr>
                                    <td><xsl:value-of select="title"></xsl:value-of></td>
                                    <td><xsl:value-of select="artist"></xsl:value-of></td>
                                </tr>

                            </xsl:for-each>

                        </table>

                    </body>
                </html>

</xsl:template>
</xsl:stylesheet>