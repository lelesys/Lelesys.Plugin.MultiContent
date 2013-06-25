<?php
namespace Lelesys\Plugin\MultiContent\TypoScript;

/*                                                                               *
 * This script belongs to the TYPO3 Flow package " Lelesys.Plugin.MultiContent". *
 *                                                                               */

use TYPO3\Flow\Annotations as Flow;

/**
 * A TypoScript object which calculates a Fluid variable of grid column span
 *
 */
class GridCalculator extends \TYPO3\TypoScript\TypoScriptObjects\AbstractTypoScriptObject {
	/**
	 * @return mixed|void
	 */
	public function evaluate() {
		$context = $this->tsRuntime->getCurrentContext();
		$node = $context['node'];
		$layoutPieces = explode('-', $node->getParent()->getProperty('layout'));
		$columnSpan = ceil(0.12 * $layoutPieces[$context['columIterator']['index']]);
		return $columnSpan;
	}
}
?>
