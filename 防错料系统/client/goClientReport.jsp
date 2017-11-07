<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<base href="/eps_server/">
    <meta charset="UTF-8">
    <title>客户报表展示页面</title>
    <link rel="stylesheet" href="static/css/ClientCss.css">
    <link rel="stylesheet" href="static/css/positionCss.css">
    <script src="static/js/jquery-1.11.3.min.js"></script>
    <script src="static/js/ClientJs.js"></script>
</head>
<body>
    <section class="position-table" id="clientReport">
        <span class="manage-staff">客户报表</span>
        <!--搜索框-->
        <div class="search" id="search">
        	客户名：<input id= "client" type="text" />
        	程序表编号：<input id="programNum" type="text" />
        	线号 ：<select id="line">
	        		<option value=>不限</option>
	        		<option value=0>301</option>
	        		<option value=1>302</option>
	        		<option value=2>303</option>
	        		<option value=3>304</option>
	        		<option value=4>305</option>
	        		<option value=5>306</option>
	        		<option value=6>307</option>
	        		<option value=7>308</option>
        	    </select> <br />
        	订单号：<input id="OrderNum" type="text" />
        	工单号 ：<input id="workOrderNum" type="text" />
       		起止时间：<input id="startTime" type="text" /> <em>--</em> <input id="endTime" type="text" />
            <button id="searchBtn" class="ui-accordion-header ui-state-default ui-corner-all ui-corner-top clientSearchBtn">查询</button>
        </div>
    </section>
</body>
</html>