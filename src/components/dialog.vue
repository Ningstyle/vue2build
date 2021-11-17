<template>
	<div>
		<el-dialog
		   title="配色方案" :visible.sync="dialogShow" :modal='true' :modal-append-to-body='true'>
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogShow = false">取 消</el-button>
		    <el-button type="primary">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			dialogShow:{
				default:false
			}
		}
	}
</script>

<style>
</style>
