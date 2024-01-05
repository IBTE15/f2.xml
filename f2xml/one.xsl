<?xml version="1.0" encoding="UTF-8"?>


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/class">

    <html>
        <head>
            <title>XSL FILE</title>
            <style>
                body{
                    background-color: black;
                    color: white;
                }
                table{
                    margin-left: 450px;
                    box-shadow: 3px 3px 4px 4px crimson;
                }
                h2{
                    text-align: center;
                    background-color: blue;
                    padding: 30px;
                    letter spacing: 10px;
                    font-size: 30px;
                    font-weight: 30px;
                    text-shadow: 3px 3px 3px yellow;
                }
            </style>
        </head>
        <body>
            <h2>XSL WORK</h2>
            <table border="2" cellspacing="50px" cellpading="50px">
            
                <tr>
                    <th bgcolor="teal" colspan="4">Student Data</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Number</th>
                    <th>Grade</th>
                </tr>
                <xsl:for-each  select="student">
                        <tr>
                            <td><xsl:value-of select="name"></xsl:value-of></td>
                        <td><xsl:value-of select="age"></xsl:value-of></td>
                        <td><xsl:value-of select="number"></xsl:value-of></td>
                        <td><xsl:value-of select="grade"></xsl:value-of></td>
                        </tr>
                </xsl:for-each>

            </table>
        </body>
    </html>


</xsl:template>    

</xsl:stylesheet>